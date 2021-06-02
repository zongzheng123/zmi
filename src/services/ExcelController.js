
export function downloadUsingGET_1 () {
    const options = {
        method: 'get'
    }
    let url = '/external/psc/excel/download'
    return request(url, options)
}
export function parseListUsingPOST ({formData}) {
    const options = {
        method: 'post'
    }
    let url = '/external/psc/excel/parse'
    options.headers = {
      'Content-Type': 'multipart/form-data',
    }
    return request(url, options)
}
