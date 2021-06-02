/*
 * @Author: your name
 * @Date: 2021-02-18 15:48:38
 * @LastEditTime: 2021-06-01 17:11:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\run.js
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');
const yeoman = require('yeoman-environment');
const { logger } = require('./utils')

const runTempGenerators = require('./template-generators')
const runServiceGenerator = require('./service-generators')

const getProjectConfig = () => {
    const root = process.cwd()
    const configFilePath =  path.resolve(root, './tiga.config.js')
    const hasConfig = fs.existsSync(configFilePath)
    if (hasConfig) {
       return require(configFilePath)
    }
    return null
}

const run = async config => {
  logger.info('任务开始')
  const {name, args} = config
  process.send && process.send({ type: 'prompt' });
  process.emit('message', { type: 'prompt' });
  const projectConfig = getProjectConfig()
  if (args.s) {
    await runServiceGenerator(args, projectConfig)
  } else {
    await runTempGenerators(config, projectConfig) 
  }
  logger.info('任务结束')
};

module.exports = run;
