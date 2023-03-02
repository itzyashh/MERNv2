import express from 'express';
import {config} from 'dotenv';
import userRouter from './routes/user.js'
config(
    {
        path: './data/config.env'
    }
);
export const app = express();

app.get('/',(req,res,next) => {
    res.send('Hello World')
})

// Mounting the routers
app.use('/api/v1/user',userRouter)