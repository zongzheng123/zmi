/*
 * @Author: your name
 * @Date: 2020-02-20 09:47:26
 * @LastEditTime: 2021-06-02 08:20:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \utils\src\service_generator.js
 */

const axios = require('axios');
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const { serviceConfigMerge, success, logger, responseTraverse, error, setConfig, getConfig } = require('../utils')
const traverse = require('json-schema-traverse')
const MIMEType = require("whatwg-mimetype");
const normalizeUrl = require('normalize-url')
const cookie = require('cookie')


const responseDataHandler = function (schema, definitions) {
    const config = getConfig()
    const { defaultValues = {} } = config
    const accept = responseTraverse(schema, ({key, value, cache}) => {
        if (cache) {
            console.log(cache)
           return cache
        }
        switch (value.type) {
            case 'number':
            case 'integer':
                return defaultValues.integer ? defaultValues.integer(value) : undefined
            case 'string':
                return defaultValues.string ? defaultValues.string(value) : ''
            case 'array':
                return defaultValues.array ? defaultValues.array(value) : []
            case 'object':
                return defaultValues.object ? defaultValues.object(value) : {}
            case 'boolean':
                return defaultValues.boolean ? defaultValues.boolean(value) : false
            default:
                break
        }
        if (value.originalRef) {
            return {}
        }
    }, {
        next: ({ key, value }) => {
            if (value.originalRef) {
                const obj = definitions[value.originalRef]
                if (obj.cache) {
                   return
                }  
                const childs = Object.entries(obj.properties).map(item => (
                    {
                        key: [key, item[0]].join('.'),
                        value: item[1],
                        cache: obj.cache
                    }
                ))
                obj.cache = key
                return childs
            }
        }
    })
    return accept
}


/**
 * @description: 将swagger返回数据处理成以模块为分类的数据对象
 * @param {*} paths
 * @param {*} tags
 * @param {*} definitions
 * @return {*}
 */
const classifyApiData = function (paths, tags, definitions) {
    const config = getConfig()
    const pathsToModules = (paths) => {
        const modules = {}
        Object.entries(paths).forEach(([pathUrl, pathConfig]) => {
            Object.entries(pathConfig).forEach(([pathMethod, apiInfo]) => {
                logger.info(`${pathUrl}清洗开始`)
                const moduleName = apiInfo.tags[0]
                const api = {
                    url: pathUrl,
                    method: pathMethod,
                    apiName: apiInfo.operationId,
                    apiNameUpper: apiInfo.operationId.replace(/^[a-z]/, item => item.toUpperCase()),
                    summary: apiInfo.summary,
                    parameters: apiInfo.parameters
                }
                if (apiInfo.responses['200'].schema && config.model) {
                    const { originalRef } = apiInfo.responses['200'].schema
                    const definition = definitions[originalRef]
                    const result = definition.properties.result
                    if (result) {
                        const responseName = pathUrl.split('/').filter(item => item && !new RegExp(`\{.+\}`, 'g').test(item)).slice(2).map((item, index) => {
                            if (index > 0) {
                                return item.replace(/^[a-z]/, item => item.toUpperCase())
                            }
                            return item
                        }).join('')
                        api.responseName = responseName
                        api.response = responseDataHandler({
                            [responseName]: result
                        }, definitions, pathUrl)
                    }

                }
                if (apiInfo.consumes && apiInfo.consumes.length) {
                    api.headers = {
                        "content-type": apiInfo.consumes[0]
                    }
                }
                const moduleKey = tags.find(item => item.name === moduleName).description.replace(/\s/g, '')
                if (!modules.hasOwnProperty(moduleKey)) {
                    modules[moduleKey] = {
                        moduleName,
                        apis: [],
                    }
                }
                modules[moduleKey].apis.push(api)
                logger.info(`${pathUrl}清洗完毕`)
            })
        })
        return modules
    }
    const modules = pathsToModules(paths)
    return modules
}

const fetchData = async (config) => {
    let token = config.token
    try {
        const url = normalizeUrl(`${config.baseUrl}/external/${config.project}/v2/api-docs`)
        const res = await axios.get(url, {
            headers: {
                Cookie: cookie.serialize('EWORK-TOKEN', token)
            }
        })

        return res
    } catch (error) {
        console.dir(error)
    }
}


module.exports = async (argConfig, projectConfig) => {
    logger.info('接口生成开始')
    const defaultConfig = {
        baseUrl: 'http://gateway.yanshi.ygzuo.com'
    }

    const config = serviceConfigMerge(defaultConfig, projectConfig, argConfig)
    if (config.inspect) {
        logger.info('config', config)
    }
    setConfig(config)

    const generator = async (config) => {
        const serviceGegerator = require('./service')
        try {
            const res = await fetchData(config)
            const { tags, paths, definitions } = res.data
            logger.info('接口数据清洗开始')
            const modules = classifyApiData(paths, tags, definitions)
            logger.info('接口数据清洗完毕')
            await serviceGegerator(modules, definitions)
            if (config.model) {
                const modelGegerator = require('./model')
                await modelGegerator(modules, definitions)
            }
        } catch (e) {
            error(e.message)
            process.exit(1)
        }

    }


    if (!config.project) {
        const answers = await inquirer.prompt([
            /* Pass your project in here */
            {
                type: 'input',
                message: '请输入项目',
                name: 'project'
            }
        ])
        await generator({
            ...config,
            project: answers.project
        })
    } else {
        await generator(config)
    }
    logger.info('接口生成结束')
}
