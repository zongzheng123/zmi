/*
 * @Author: your name
 * @Date: 2021-04-02 16:40:14
 * @LastEditTime: 2021-06-04 16:13:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zmi\lib\utils\traverse.js
 */
const dottie = require('dottie')
const {logger} = require('./log')


exports.responseTraverse = (obj, visitor, options = {}) => {
   const { next } = options
   const queue = Object.entries(obj).map(item => ({
       key: item[0],
       value: item[1]
   }))
   const accpet= {}
   while (queue.length) {
      const current = queue.shift()
      const {key } = current
      try {
         dottie.set(accpet, key,  visitor(current))
      } catch (error) {
          logger.info(error)
      }

      const nextEles = next ? next(current) : undefined
      if (nextEles) {
        queue.push(...nextEles)
      }
   }
   return accpet
}