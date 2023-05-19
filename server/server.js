import {app} from './app.js'
import { connectDB } from './db/databse.js'
connectDB()
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))