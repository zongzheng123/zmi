import { stringify } from 'qs'

export function pageContractByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/base/sel/contract'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageSupplierByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/base/sel/supplier'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
