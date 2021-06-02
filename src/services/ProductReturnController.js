import { stringify } from 'qs'

export function listByParamUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/return/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveBatchUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/product/return/save'
    options.data = body
    return request(url, options)
}
