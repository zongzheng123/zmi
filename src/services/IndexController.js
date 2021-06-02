import { stringify } from 'qs'

export function pageContractUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/contract'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function getIndexHeadUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/head'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pagePaymentUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/payment'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageProductUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/product'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportProductUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/product/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageReceRkUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/receiptRk'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageRkUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/index/rk'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
