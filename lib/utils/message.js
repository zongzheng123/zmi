/*
 * @Author: your name
 * @Date: 2021-04-02 10:28:33
 * @LastEditTime: 2021-04-02 10:30:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\utils\message.js
 */
const chalk = require('chalk')

exports.sussess = (...args) => console.log(chalk.green(...args))

exports.warning = (...args) => console.log(chalk.yellow(...args))

exports.error = (...args) => console.log(chalk.red(...args))