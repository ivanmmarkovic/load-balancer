
import { returnService } from "../loadBalancer.js";
import { createUserUtil, getUsersUtil , handleErrors, getUserByIdUtil, updateUserByIdUtil, deleteUserByIdUtil} from "../utils.js";

export const getUsers = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    try {
        let {status, data, message} = await getUsersUtil(protocol, host, port);
        return res.status(status).json({
            status, 
            data, 
            message
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    try {
        let {id} = req.params;
        let {status, data, message} = await getUserByIdUtil(protocol, host, port, id);
        return res.status(status).json({
            status, 
            data, 
            message
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
};


export const createUser = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    try {
        let {status, data, message} = await createUserUtil(protocol, host, port, req.body);
        return res.status(status).json({
            status, 
            data, 
            message
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
};


export const updateUserById = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    try {
        let {id} = req.params;
        let {status, data, message} = await updateUserByIdUtil(protocol, host, port, req.body, id);
        return res.status(status).json({
            status, 
            data, 
            message
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
};


export const deleteUserById = async (req, res, next) => {
    let service = returnService(req);
    // check if service is null
    let {protocol, host, port} = service;
    try {
        let {id} = req.params;
        let {status, message, data} = await deleteUserByIdUtil(protocol, host, port, id);
        if(status == 204)
            return res.status(status).json(data);
        return res.status(status).json({
            status, 
            data, 
            message
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
};