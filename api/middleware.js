

export const balancerMiddleware = async (req, res, next) => {
    console.log(req.url);
    next();
};