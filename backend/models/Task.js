import mongoose from "mongoose";
import User from "./user.js";


const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["pending", "progress", "done"],
      default: "pending",
    },
     owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
     }
  },
  { timestamps: true }
);


const Task = mongoose.model("Task", taskSchema);
export default Task;
