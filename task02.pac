function FindProxyForURL(url, host) {
 
    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
        return "DIRECT"; 
    }

    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
        return "PROXY proxy.internal.local:8080"; 
    }
  
    if (!isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
        return "PROXY 203.0.113.1:3128"; 
    }

    if (dnsDomainIs(host, ".example.com")) {
        return "PROXY proxy.example.com:8080"; 
    }

    return "DIRECT";
}