import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5001;


app.listen(port, () => console.log(`Server running on port ${port}`));