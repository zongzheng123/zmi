import { stringify } from 'qs'

export function pageCkLogUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/log'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportUsingGET_3 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageRkLogUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/log'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageStockUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/stock/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
