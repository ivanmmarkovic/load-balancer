
import { returnService } from "../loadBalancer.js";

export const getUsers = async (req, res, next) => {
    let service = returnService(req);
    console.log(service);
    return res.status(200).json({ message: 'Get users route' });
};

export const createUser = async (req, res, next) => {
    let service = returnService(req);
    console.log(service);
    return res.status(200).json({ message: 'Create user route' });
};