/*
 * @Author: your name
 * @Date: 2021-04-02 15:47:27
 * @LastEditTime: 2021-04-02 15:48:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\utils\context.js
 */
const context = {
    config: {}
}

exports.getConfig = () => {
    return context.config
}

exports.setConfig = (config) =>  {
    context.config = config
}