import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
// load environment variables from .env file into process.env
dotenv.config();

const connect = async ()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mern-app');
    console.log("connect to mongodb!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected!");
});

// middlewares
app.use(cookieParser());
// allow use json as body
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});

   
app.listen(8000,()=>{
  connect();
  console.log("connect to backend!");
}) 