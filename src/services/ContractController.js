import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function getBisContractUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/bis/type'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function getChangeContractVOUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/change/vo'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageMainContractProjectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/main/project/select'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function mobileContractDetailUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/mobile/detail'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function listByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/product/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function projectExportUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/project/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageProjectByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/project/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contract/save'
    options.data = body
    return request(url, options)
}
export function updateUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contract/update'
    options.data = body
    return request(url, options)
}
export function pageLogUsingGET ({path,query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/{contractId}/log/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function listProcessHistoryUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/{contractId}/processHistory'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function detailUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/{id}'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function checkApprovalUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/{id}/checkApproval'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function deleteByIdUsingPOST ({path}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contract/{id}/delete'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function rckCompareUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/{id}/rck/compare'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
