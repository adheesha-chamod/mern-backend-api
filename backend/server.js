import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 8000;
import connectDB from './config/db.js';
import {
    notFound,
    errorHandler
} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";


connectDB();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});