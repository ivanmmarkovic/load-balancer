

const balancer = {
    users: {
        services: ['http://users1:4001', 'http://users2:4002', 'http://users3:4003'],
        index: 0
    },
    articles: {
        services: ['articlesService1', 'articlesService2', 'articlesService3'],
        index: 0
    }
};

let loadBalancer = null;

const getLoadBalancer = () => {
    if(loadBalancer == null){
        loadBalancer = balancer;
    }
    return loadBalancer;
};

export const returnService = (req) => {
    let balancerInstance = getLoadBalancer();
    let url = req.baseUrl;
    let requestedService = balancerInstance?.[url.substring(1)];
    if(requestedService){
        requestedService.index = requestedService.index < requestedService.services.length ? requestedService.index : 0;
        let serviceInstance = requestedService.services[requestedService.index];
        requestedService.index += 1;
        // http://users1:4001
        let serviceInstanceOriginArray = serviceInstance.split(":");
        serviceInstanceOriginArray[1] = serviceInstanceOriginArray[1].substring(2);
        let [protocol, host, port] = serviceInstanceOriginArray;
        return {
            protocol,
            host,
            port
        }
    }
    return null;
};
