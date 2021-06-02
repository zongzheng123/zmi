import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function listByMainContactIdUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/file/contract/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function listUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contract/file/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST_1 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contract/file/save'
    options.data = body
    return request(url, options)
}
export function updateUsingPOST_1 ({path}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contract/file/{id}/delete'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
