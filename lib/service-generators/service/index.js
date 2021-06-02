/*
 * @Author: your name
 * @Date: 2021-03-29 19:54:30
 * @LastEditTime: 2021-06-02 10:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\service-generators\service\index.js
 */
const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default
const mustache = require('mustache')
const fs = require('fs-extra')
const path = require('path')
const stringifyObject = require('stringify-object')
const { dirGenerate, fileOutput, getConfig, logger } = require('../../utils')

/**
 * @description: 渲染service文件模板
 * @param {*} dependencies
 * @param {*} apis
 * @return {*}
 */
const templateRender = ({ dependencies = [], apis }) => {
    try {
        const tempalteFileStr = fs.readFileSync(path.resolve(__dirname, './template.mustache.js'), {
            encoding: 'utf-8'
        })
        const translatedFileStr = mustache.render(tempalteFileStr, {
            imports: dependencies,
            apis
        })
        return translatedFileStr
    } catch (error) {
        logger.info(error)
    }
}

/**
 * @description: 生成service依赖工具文件
 * @param {*} dirPath
 * @return {*}
 */
const dependenciesGenerate = async (dirPath) => {
    try {
        const dependencesStr = fs.readFileSync(path.resolve(__dirname, './helper.js'), {
            encoding: 'utf-8'
        })
        await fileOutput({ dirPath, moduleName: '_utils.js', fileStr: dependencesStr })
    } catch (error) {
        logger.info(error)
    }
}


const pathGenerate = (item) => {
   return item
}

const bodyGenerate = (item) => {
    return item
 }

const queryGenerate = (item) => {
    return item
 }

const formDataGenerate = (item) => {
    return item
 }




module.exports = async function (modules, definitions) {
    const config = getConfig()
    const { servicePath = path.resolve(process.cwd(), './src/services') } = config
    dirGenerate(servicePath)
    await dependenciesGenerate(servicePath)
    Object.entries(modules).forEach(async ([moduleKey, module]) => {
        const options = {
            dependencies: [],
            apis: module.apis.map(api => {
                const { parameters = [] } = api
                let body, path, query, formData, patchParamters
                parameters.forEach(item => {
                    switch (item.in) {
                        case 'path':
                            path = pathGenerate(item)
                            break
                        case 'query':
                            query = queryGenerate(item)
                            break
                        case 'body':
                            body = bodyGenerate(item)
                            break
                        case 'formData':
                            formData = formDataGenerate(item)
                            break
                        case 'header':
                                break
                        default :
                            patchParamters = config.patchParamters ? config.patchParamters(item) : undefined
                    }
                })
                let paramsImp = []
                if (body) {
                    paramsImp.push('body')
                }
                if (path) {
                    paramsImp.push('path')
                }
                if (query) {
                    paramsImp.push('query')
                }
                if (formData) {
                    paramsImp.push('formData')
                }
                if (patchParamters) {
                    paramsImp.push('patchParamters')
                }
                if (paramsImp.length) {
                    paramsImp = `{${paramsImp.join(',')}}`
                } else {
                    paramsImp = undefined
                }
                return {
                    body,
                    path,
                    query,
                    formData,
                    patchParamters,
                    paramsImp,
                    ...api,
                }
            })
        }
        if (options.apis.find(item => item.query)) {
            options.dependencies.push({
                module: '{ stringify }',
                from: 'qs'
            })
        }
        if (options.apis.find(item => item.path)) {
            options.dependencies.push({
                module: '{ restfulUrlReplace }',
                from: './_utils'
            })
        }
        const fileStr = templateRender(options)
        await fileOutput({ dirPath: servicePath, moduleName: moduleKey + '.js', fileStr, lint: true })
    })

}