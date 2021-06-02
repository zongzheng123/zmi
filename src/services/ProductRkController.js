import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function contractSelectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/contract/select'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function listProjectByMainContractIdUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/contract/{contractId}/project/list'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function exportUsingGET_2 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function getNumberUsingGET () {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/head'
    return request(url, options)
}
export function listMappingUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/mapping/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageByParamUsingGET_2 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function listByParamUsingGET_2 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/product/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST_4 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/product/rk/save'
    options.data = body
    return request(url, options)
}
export function updateUsingPOST_3 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/product/rk/update'
    options.data = body
    return request(url, options)
}
export function detailUsingGET_3 ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/product/rk/{id}'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
