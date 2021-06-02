import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function activateUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/activate'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function archiveUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/archive'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportUsingGET_4 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageByParamUsingGET_3 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/log/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageByParamUsingGET_4 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function projectExportUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/project/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageProjectUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/project/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function exportRkLogUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/rk/log/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageRkLogUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/rk/log/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST_5 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/supplier/save'
    options.data = body
    return request(url, options)
}
export function thExportUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/th/export'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function pageThByParamUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/th/page'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function updateUsingPOST_4 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/supplier/update'
    options.data = body
    return request(url, options)
}
export function detailUsingGET_4 ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/supplier/{id}'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
