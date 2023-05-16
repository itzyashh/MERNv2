import express from 'express';
import dotenv from 'dotenv';

dotenv.config(
    {
        path: './config/config.env'
    }
);
export const app = express();

import user from './routes/user.js';

app.use('/api/v1/user', user);


