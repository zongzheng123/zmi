import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function pageContractSelectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/contract/select'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function getCkNumberUsingGET () {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/head'
    return request(url, options)
}
export function listMappingUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/mapping/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageByParamUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function listProjectSelectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/project/select'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pagePurCkUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/pubRkMapping/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageRkSelectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/rkSelect/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST_3 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/product/ck/save'
    options.data = body
    return request(url, options)
}
export function updateUsingPOST_2 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/product/ck/update'
    options.data = body
    return request(url, options)
}
export function detailUsingGET_2 ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/ck/{id}'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
