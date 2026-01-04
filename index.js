import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

mongoose.connect(mongoUri, {})
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Mongo connection error:', err));

const connection = mongoose.connection;

app.use(bodyParser.json())

app.use((req, res, next) => {
    const token = (req.header("Authorization")?.replace ("Bearer"," "));

    if(token!= null){
        jwt.verify(token,"cbc secret-key-7973", (error, decoded) => {
            if (!error){
                req.user = decoded
            }
        })
    }

    next()
})

app.use("/api/students",studentRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)

app.listen(
  3000,
  ()=>{
    console.log("Server is running on port 3000");
  }
)
