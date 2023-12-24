
import express from 'express';

const app = express();

import { router as userRouter } from './routes/userRoutes.js';
import { router as articleRouter } from './routes/articleRoutes.js';


app.get('/', async (req, res, next) => {
    return res.status(200).json({ message: 'Hi' });
});

app.use('/users', userRouter);
app.use('/articles', articleRouter);


app.listen(8080, () => console.log('Api service is listening on port 8080'));