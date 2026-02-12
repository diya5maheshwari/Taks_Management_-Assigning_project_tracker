import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authroutes from './routes/authroutes.js'
import taskroutes from './routes/taskroutes.js'

dotenv.config();
//app
const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/auth',authroutes);
app.use("/api/task",taskroutes);

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to mongoDB", err);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
