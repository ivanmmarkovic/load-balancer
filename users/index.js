
import express from 'express';
const app = express();

app.use(express.json());

console.log(process.argv);

app.get('/users', async (req, res, next) => {
    return res.status(200).json({ message: `Users service users get ${process.env.PORT}` });
});


app.listen(process.env.PORT, () => console.log('Users service', process.env.PORT));
