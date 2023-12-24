

const loadBalancer = {
    users: {
        services: ['usersService1', 'usersService2', 'usersService3'],
        index: 0
    },
    articles: {
        services: ['articlesService1', 'articlesService2', 'articlesService3'],
        index: 0
    }
}


export const balancerMiddleware = async (req, res, next) => {
    let url = req.baseUrl;
    let requestedService = loadBalancer?.[url.substring(1)];
    if(requestedService){
        requestedService.index = requestedService.index < requestedService.services.length ? requestedService.index : 0;
        let service = requestedService.services[requestedService.index];
        requestedService.index += 1;
    }
    next();
};