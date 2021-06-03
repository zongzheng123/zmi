const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default
const mustache = require('mustache')
const fs = require('fs-extra')
const path = require('path')
const stringifyObject = require('stringify-object')
const { dirGenerate, fileOutput, getConfig, logger } = require('../../utils')


/**
 * @description: 渲染model文件模板
 * @param {*} dependencies
 * @param {*} apis
 * @return {*}
 */
const templateRender = ({ dependencies = [], moduleKey, module }) => {
    try {
        const tempalteFileStr = fs.readFileSync(path.resolve(__dirname, './template.mustache.js'), {
            encoding: 'utf-8'
        })
        const states = {}
        const serviceModules = []
        const apis = []
        module.apis.forEach((api) => {
            if (api.response) {
                serviceModules.push(api.apiName)
                Object.assign(states, api.response)
                apis.push(api)
            }
        })
        if (serviceModules.length) {
            const serviceModulesStr = `{${serviceModules.join(',')}}`
            dependencies.push({
                module: serviceModulesStr,
                from: `@/services/${moduleKey}`
            })
        }
        const translatedFileStr = mustache.render(tempalteFileStr, {
            imports: dependencies,
            moduleKey,
            apis,
            states: Object.entries(states).map(([key, value]) => {
                let transValue = value
               if (typeof value === 'object') {
                transValue = stringifyObject(value)
               }
               if (typeof value === 'string') {
                transValue = JSON.stringify(value)
               }
               return  {
                    stateName: key, 
                    value:  transValue
                }
            })
        })
        return translatedFileStr
    } catch (error) {
        logger.error(error)
    }
}

/**
 * @description: 生成model依赖工具文件
 * @param {*} dirPath
 * @return {*}
 */
const dependenciesGenerate = (dirPath) => {
    try {
        const dependencesStr = fs.readFileSync(path.resolve(__dirname, './helper.js'), {
            encoding: 'utf-8'
        })
        fileOutput({ dirPath, moduleName: '_utils.js', fileStr: dependencesStr })
    } catch (error) {
        logger.warn(error)
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
    logger.info('model生成开始')
    const config = getConfig()
    const { modelPath = path.resolve(process.cwd(), './src/models') } = config
    dirGenerate(modelPath)
    dependenciesGenerate(modelPath)
    Object.entries(modules).forEach(async ([moduleKey, module]) => {
        const options = {
            dependencies: [],
            moduleKey,
            module
        }
        const fileStr = templateRender(options)
        await fileOutput({ dirPath: modelPath, moduleName: moduleKey + '.js', fileStr, lint: true })
    })
    logger.info('model生成结束')
}