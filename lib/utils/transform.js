const mustache = require('mustache')

exports.htmlStrUnescape = (str) => {
    return str.replace(/&#x2F;/g, "/")
}

exports.templateRender = (tempalteFileStr, options) => {
    return mustache.render(tempalteFileStr, options)
}