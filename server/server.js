import {app} from './app.js';
import dotenv from 'dotenv';
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
    });