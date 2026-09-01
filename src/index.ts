import 'dotenv/config';
import express from 'express';
import cors from 'cors'

import fichaRouter from './routes/ficha.routes'


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));

app.use('/fichas', fichaRouter)


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
});