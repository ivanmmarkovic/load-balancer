
import express from 'express';
const app = express();

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { UserModel } from './model.js';
import { handleErrors } from './utils.js';

mongoose.connect('mongodb://mongodbusers:27017/users?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.catch(e => console.log(e.message))
.finally(() => console.log('Finally'));

app.use(express.json());


app.get('/users', async (req, res, next) => {
    console.log(`Users service users get ${process.env.PORT}`);
    try {
        let users = await UserModel.find({});
        return res.status(200).json({
            status: 200,
            data: users,
            message: null
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
});

app.get('/users/:id', async (req, res, next) => {
    console.log(`Users service users get ${process.env.PORT}`);
    try {
        let {id} = req.params;
        let user = await UserModel.findById(id);
        if(!user){
            return res.status(404).json({
                status: 404,
                data: null,
                message: 'Not found'
            });
        }
        return res.status(200).json({
            status: 200,
            data: user,
            message: null
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
});

app.post('/users', async (req, res, next) => {
    console.log(`Users service users post ${process.env.PORT}`);
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let user = await UserModel.create(req.body);
        return res.status(201).json({
            status: 201,
            data: user,
            message: null
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
});

app.patch('/users/:id', async (req, res, next) => {
    console.log(`Users service users get ${process.env.PORT}`);
    try {
        let {id} = req.params;
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        let user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        if(!user){
            return res.status(404).json({
                status: 404,
                data: null,
                message: 'Not found'
            });
        }
        return res.status(200).json({
            status: 200,
            data: user,
            message: null
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
});

app.delete('/users/:id', async (req, res, next) => {
    console.log(`Users service users get ${process.env.PORT}`);
    try {
        let {id} = req.params;
        let user = await UserModel.findByIdAndDelete(id);
        console.log(user);
        if(!user){
            return res.status(404).json({
                status: 404,
                data: null,
                message: 'Not found'
            });
        }
        return res.status(200).json({
            status: 204,
            data: null,
            message: null
        });
    } catch (error) {
        let [status, message] = handleErrors(error);
        error.status = status;
        error.message = message;
        next(error);
    }
});


app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message || 'Internal server error';
    return res.status(status).json({
        status,
        data: null,
        message
    });
});

app.listen(process.env.PORT, () => console.log('Users service', process.env.PORT));
