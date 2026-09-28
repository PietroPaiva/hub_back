import 'dotenv/config';
import express from 'express';
import cors from 'cors'

import fichaRouter from './routes/ficha.routes'
import userRouter from './routes/userRoutes'
import { env } from './config/env';


const app = express();

app.use(express.json());
app.use(cors({origin: env.FRONT_URL}));
app.use(express.urlencoded({ extended: false}));

app.use('/fichas', fichaRouter)
app.use('/auth', userRouter)


app.listen(env.PORT, () => {
    console.log(`Servidor rodando em ${env.PORT}` );
});