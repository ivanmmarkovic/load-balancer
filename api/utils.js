
import {request, get} from 'http';

export const createUserUtil = (protocol, host, port, payload) => {

    return new Promise((resolve, reject) => {
        const req = request({
            protocol,
            host,
            port,
            path: '/users',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }, res => {
            res.on('data', data => {
                let {responseData, errorMessage} = JSON.parse(data.toString());
                resolve({status: res.statusCode, responseData, errorMessage});
            });
            res.on('error', error => reject({status: 503, responseData: null, errorMessage: 'Service Unavailable'}));
        });
        req.end(JSON.stringify(payload));
        req.on('error', error => reject({status: 503, responseData: null, errorMessage: 'Service Unavailable'}));
    });

};

export const getUsersUtil = (protocol, host, port) => {

    return new Promise((resolve, reject) => {
        let req = get(`${protocol}://${host}:${port}/users`, res => {
            res.on('data', data => {
                let o = JSON.parse(data.toString());
                resolve(o);
            });
            res.on('error', error => reject({status: 503, responseData: null, errorMessage: 'Service Unavailable'}));
        });
        req.on('error', error => reject({status: 503, responseData: null, errorMessage: 'Service Unavailable'}));

    });

};
    