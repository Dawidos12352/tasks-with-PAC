function findProxyForURL(url, host) {
    if(isPlainHostName(host))
        return "DIRECT";

    if(
        dnsDomainIs(host, 'local') || 
        dnsDomainIs(host, 'localdomain') || 
        dnsDomainIs(host, 'mydomain.com') 
    )
    return "DIRECT";

    if(
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "169.254.0.0", "255.255.0.0") 

    )
    return "DIRECT";

    return "PROXY proxyl:8080";
}
