import React from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/task/task`, { withCredentials: true })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log("Error handling tasks data:", err);
      });

    axios
      .get(`${API_URL}/api/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("User fetch error", err);
      });
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/api/task/task/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((err) => {
        console.log("Delete error", err);
      });
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  };

  const handleUpdate = () => {
    axios
      .put(
        `${API_URL}/api/task/task/${editingTask._id}`,
        {
          title,
          description,
          status,
        },
        { withCredentials: true },
      )
      .then((res) => {
        setTasks(
          tasks.map((task) => (task._id === editingTask._id ? res.data : task)),
        );
        setEditingTask(null);
      })
      .catch((err) => {
        console.log("error updating task", err);
      });
  };

  return (
    <div className="dashboard">
      {editingTask && (
        <div className="modal-overlay">
          <div className="edit-modal">
            <h2>Edit Task</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
            ></textarea>

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="done">Completed</option>
            </select>

            <div className="modal-actions">
              <button className="update-btn" onClick={handleUpdate}>
                Update
              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditingTask(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="user-profile">
        <div>
          {user && (
            <>
              <h2>Welcome, {user.name} 👋</h2>
              <p>{user.email}</p>
            </>
          )}
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-header">
        <h1>My Tasks</h1>
        <Link to="/add-task">
          <button className="add-btn">+ Add Task</button>
        </Link>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            id={task._id}
            task={task}
            title={task.title}
            description={task.description}
            status={task.status}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
