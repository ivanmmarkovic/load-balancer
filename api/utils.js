
import {request, get} from 'http';

export const createUserUtil = (protocol, host, port, payload) => {

    return new Promise((resolve, reject) => {
        const req = request({
            protocol: `${protocol}:`,
            host,
            port,
            path: '/users',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }, res => {
            res.on('data', respData => {
                let {data, message, status} = JSON.parse(respData.toString());
                resolve({data, message, status});
            });
            res.on('error', error => reject({status: 503, data: null, message: 'Service Unavailable'}));
        });
        req.end(JSON.stringify(payload));
        req.on('error', error => reject({status: 503, data: null, message: 'Service Unavailable'}));
    });

};

export const getUsersUtil = (protocol, host, port) => {

    return new Promise((resolve, reject) => {
        let req = get(`${protocol}://${host}:${port}/users`, res => {
            res.on('data', data => {
                let o = JSON.parse(data.toString());
                resolve(o);
            });
            res.on('error', error => reject({status: 503, data: null, message: 'Service Unavailable'}));
        });
        req.on('error', error => reject({status: 503, data: null, message: 'Service Unavailable'}));

    });

};

export function handleErrors(error) {
    let status = undefined;
    let message = undefined;
    
    if(error.message.indexOf('dup key') != -1){
        let key = error.message.substring(error.message.lastIndexOf('{') + 1, error.message.lastIndexOf(':')).trim();
        status = 400;
        message = `Duplicate key ${key}`;
    }
    if(error.message.indexOf('required') != -1){
        let index = error.message.indexOf('`') + 1;
        let key = error.message.substring(error.message.indexOf('`') + 1, error.message.indexOf('`', index));
        status = 400;
        message = `Required field ${key}`;
    }
    if(error.message == 'Not found'){
        status = 404;
        message = 'Not found';
    }
    if(error.message == 'Service Unavailable'){
        status = 503;
        message = 'Service Unavailable';
    }
    return [status, message];
}

    