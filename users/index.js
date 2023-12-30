
import express from 'express';
const app = express();

import mongoose from 'mongoose';
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

app.post('/users', async (req, res, next) => {
    console.log(`Users service users post ${process.env.PORT}`);
    try {
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
