import { restfulUrlReplace } from './_utils'

export function tmpUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/process/addTmp'
    options.data = body
    return request(url, options)
}
export function cancelProcessUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/process/cancel'
    options.data = body
    return request(url, options)
}
export function detailByInstanceIdUsingGET ({path}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/process/{instanceId}/contract'
    url = restfulUrlReplace(url, path)
    return request(url, options)
}
