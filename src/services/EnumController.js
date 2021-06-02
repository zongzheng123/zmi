
export function listEnumUsingGET () {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/enum/list'
    return request(url, options)
}
