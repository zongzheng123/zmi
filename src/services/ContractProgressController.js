import { stringify } from 'qs'

export function detailUsingGET_1 ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/contractProgress/detail'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
export function saveOrUpdateUsingPOST ({body}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/contractProgress/saveOrUpdate'
    options.data = body
    return request(url, options)
}
