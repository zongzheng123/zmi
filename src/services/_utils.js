export function restfulUrlReplace(url, params) {
    for (const t in params) {
      url = url.replace(new RegExp(`\{${t}\}`, 'g'), params[t])
    }
    return url
}

