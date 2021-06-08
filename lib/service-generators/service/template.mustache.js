{{#imports}}
import {{module}} from '{{{from}}}'
{{/imports}}
import request from '@/utils/request'

{{#apis}}
export function {{apiName}} ({{paramsImp}}{{#paramsImp}}={}{{/paramsImp}}) {
    const options = {
        method: '{{method}}'
    }
    let url = '{{{url}}}'
    {{#query}}
    url = [url, stringify(query)].filter(item => item).join('?')
    {{/query}}
    {{#path}}
    url = restfulUrlReplace(url, path)
    {{/path}}
    {{#body}}
    options.data = body
    {{/body}}
    {{#formData}}
    options.headers = {
      'Content-Type': 'multipart/form-data',
    }
    {{/formData}}
    return request(url, options)
}
{{/apis}}
