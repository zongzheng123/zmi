/*
 * @Author: your name
 * @Date: 2021-04-02 09:55:35
 * @LastEditTime: 2021-06-01 15:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\utils\configMerge.js
 */

exports.serviceConfigMerge = (defaultConfig = {},  projectConfig = {}, argConfig = {},) => {  
    const acceptMerge = Object.assign({}, defaultConfig, projectConfig, argConfig)
    return acceptMerge
}