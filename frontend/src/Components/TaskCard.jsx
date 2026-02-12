import React from "react";
import "../css/TaskCard.css";

const TaskCard = ({ onDelete, onEdit, task }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className={`status ${task.status}`}>{task.status}</span>
      </div>

      <p className="task-desc">{task.description}</p>

      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
