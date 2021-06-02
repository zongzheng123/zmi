import { stringify } from 'qs'

export function listProductUsingGET ({query}) {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/biz/product/list'
    url = [url, stringify(query)].filter(item => item).join('?')
    return request(url, options)
}
