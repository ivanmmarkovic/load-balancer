
import express from 'express';

const app = express();


app.get('/', async (req, res, next) => {
    return res.status(200).json({ message: 'Hi' });
});

console.log('Hi');


app.listen(8080, () => console.log('Api service is listening on port 8080'));