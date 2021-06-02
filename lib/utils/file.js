/*
 * @Author: your name
 * @Date: 2021-04-02 11:11:47
 * @LastEditTime: 2021-06-02 10:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\utils\file.js
 */
const { error } = require('./message')
const fs = require('fs-extra')
const path = require('path')
const { logger } = require('./log')
const eslintFile = async (path) => {
    try {
        const { ESLint } = require("eslint")
        const eslint = new ESLint({fix: true})
        const results = await eslint.lintFiles(path)
        const formatter = await eslint.loadFormatter()
        return formatter.format(results)
    } catch (error) {
        logger.error(error)
    }
}

exports.eslintFile = eslintFile

exports.dirGenerate = (dirPath) => {
    try {
        fs.mkdirsSync(dirPath);
    } catch (e) {
        error(e.message)
        process.exit(1)
    }
}

exports.fileOutput = async ({ dirPath, moduleName, fileStr, lint }) => {
    try {
        const modulePath = path.resolve(dirPath, './', moduleName)
        fs.removeSync(modulePath)
        fs.writeFileSync(modulePath, fileStr)
        // if (lint) {
        //     await eslintFile(modulePath)
        // }
    } catch (error) {
        logger.error(error)
    }
}
