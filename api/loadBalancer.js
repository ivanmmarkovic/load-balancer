

const balancer = {
    users: {
        services: ['usersService1', 'usersService2', 'usersService3'],
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
    let serviceInstance = null;
    let balancerInstance = getLoadBalancer();
    let url = req.baseUrl;
    let requestedService = balancerInstance?.[url.substring(1)];
    if(requestedService){
        requestedService.index = requestedService.index < requestedService.services.length ? requestedService.index : 0;
        serviceInstance = requestedService.services[requestedService.index];
        requestedService.index += 1;
    }
    return serviceInstance;
};
