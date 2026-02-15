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
  origin: [
    "http://localhost:5173",          // local frontend
    "https://task-management-assigning-project-tracker-hs7n8riq0.vercel.app" 
  ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/auth',authroutes);
app.use("/api/task",taskroutes);
app.get("/health", (req, res) => {
  res.json({ status: "Backend is healthy ✅" });
});

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to mongoDB", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
