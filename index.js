import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOUROL = process.env.MONGO_URL


mongoose.connect(MONGOUROL).then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((err)=>{
    console.log(err);
}) 
app.use('/api/user',route)

