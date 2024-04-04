function findProxyForURL(url, host) {
    
    // dnsDomainIs
    
    if (
        dnsDomainIs(host, "google.com") || 
        dnsDomainIs(host, "www.google.com") 
        )
    return "DIRECT";

    // shExpMatch

    if(shExpMatch(host, "*.local"))
    return "DIRECT";

    if(
        shExpMatch(host, "vpn.domain.com") ||
        shExpMatch(url, "https://abcdomain.com/folder/*")
    )
    return "DIRECT";
    
    // isInNet

    if(isInNet( dnsResolve(host), "172.16.0.0" , "255.240.0.0"))
    return "DIRECT";

    // myIpAddress

    // dnsResolve

    if(
        isInNet(dnsResolve(host), "10.0.0.0" , "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0" , "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0" , "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0" , "255.255.255.0") 
    )
    return "DIRECT";

    let resultHost = dnsResolve(host);

    if (
        isInNet(resultHost, "10.0.0.0" , "255.0.0.0") ||
        isInNet(resultHost, "172.16.0.0" , "255.240.0.0") ||
        isInNet(resultHost, "192.168.0.0" , "255.255.0.0") ||
        isInNet(resultHost, "127.0.0.0" , "255.255.255.0") 
    )
    return "DIRECT"

    // isPlainHostName 

    if(isPlainHostName(host))
    return "DIRECT";

    // localHostOrDomainIs

    if(localHostOrDomainIs(host, "www.google.com"))
    return "DIRECT";

    // isResolvable

    if(isResolvable(host))
    return "PROXY proxy1.example.com:8080";

    // dnsDomainLevels

    if(dnsDomainLevels(host) > 0)
    return "PROXY proxy1.example.com:8080";
        else return "DIRECT";

    // weekdayRange

    if(weekdayRange("MON", "FRI"))
    return "PROXY proxy1.example.com:8080";
        else return "DIRECT";

    // dateRange 

    if(dateRange("JAN", "MAR"))
    return "PROXY proxy1.example.com:8080";
        else return "DIRECT";
    

    // timeRange 

    if(timeRange(8, 20))
     return "PROXY proxy1.example.com:8080";
        else return "DIRECT";

        return "PROXY 4.5.6.7:8080; PROXY 7.8.9.10:8080"; 

}




