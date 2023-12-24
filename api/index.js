
import express from 'express';
import { balancerMiddleware } from './middleware.js';

const app = express();

import { router as userRouter } from './routes/userRoutes.js';
import { router as articleRouter } from './routes/articleRoutes.js';


app.get('/', balancerMiddleware, async (req, res, next) => {
    return res.status(200).json({ message: 'Hi' });
});

app.use('/users', balancerMiddleware, userRouter);
app.use('/articles', balancerMiddleware, articleRouter);


app.listen(8080, () => console.log('Api service is listening on port 8080'));