import { stringify } from 'qs'
import { restfulUrlReplace } from './_utils'

export function listDocUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/doc/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveUsingPOST_2 ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/doc/save'
    options.data = body
    return request(url, options)
}
export function deleteUsingPOST ({path}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/doc/{id}/delete'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
export function downloadUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/doc/{id}/download'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
