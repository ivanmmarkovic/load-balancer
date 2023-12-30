
import express from 'express';

const app = express();

import { router as userRouter } from './routes/userRoutes.js';
import { router as articleRouter } from './routes/articleRoutes.js';


app.use(express.json());

app.get('/', async (req, res, next) => {
    return res.status(200).json({ message: 'Hi' });
});

app.use('/users', userRouter);
app.use('/articles', articleRouter);


app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message || 'Internal server error';
    return res.status(status).json({
        status,
        data: null,
        message
    });
});

app.listen(8080, () => console.log('Api service is listening on port 8080'));