import React from "react";
import "../css/AddTask.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const addTask = async () => {
    try {
      await axios.post(
        `${API_URL}/api/task/task`,
        {
          title,
          description,
          status,
        },
        { withCredentials: true },
      );
      navigate("/dashboard");
    } catch (err) {
      console.log("Error adding task:", err);
    }
  };

  return (
    <div className="add-task-page">
      <div className="add-task-box">
        <h1>Add New Task</h1>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="progress">In Progress</option>
          <option value="done">Completed</option>
        </select>

        {/* <Link to="/dashboard">
          <button onClick={addTask}>Add Task</button>
        </Link> */}
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
