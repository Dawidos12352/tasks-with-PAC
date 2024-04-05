function findProxyForURL(url, host) {

    if(shExpMatch(host, "*.internal.local")){
        return "PROXY internal.proxy.example.com:8080"
    }

    if(isPlainHostName(host) || dnsDomainIs(host, "internal.local")){
        return "DIRECT"
    } else {
        return "PROXY external.proxy.example.com:8080"
    }

    if(shExpMatch(url, "https://api.example.com/*")){
        return "PROXY api.proxy.example.com:8080"
    }


    return "PROXY default.proxy.example.com:8080"
}