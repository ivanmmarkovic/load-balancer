
import { returnService } from "../loadBalancer.js";
import { createUserUtil, getUsersUtil } from "../utils.js";

export const getUsers = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    console.log(service);
    let {protocol, host, port} = service;
    try {
        let d = await getUsersUtil(protocol, host, port);
        console.log(d);
    } catch (error) {
        console.log('Error ', error.message);
    }
    return res.status(200).json({ message: 'Get users route' });
};

export const createUser = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    let o = await createUserUtil(protocol, host, port, req.body);
    console.log(o);
    return res.status(200).json({ message: 'Create user route' });
};