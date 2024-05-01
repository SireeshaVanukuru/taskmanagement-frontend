import React, { useState } from "react";

import "./index.css";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!taskName.trim()) {
      setError("Task name is required.");
      return;
    } else if (!taskDescription.trim()) {
      setError("Provide details of task");
      return;
    }

    // Add task
    addTask({ taskName, taskDescription, assignedUser });

    // Reset form
    setTaskName("");
    setTaskDescription("");
    setAssignedUser("");
    setError("");
  };

  return (
    <div className="form-container">
      <h2 className="add-task">Add New Task</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-style">
          <label htmlFor="taskName" className="label-style">
            Task Name:
          </label>
          <br />
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="input-style">
          <label className="label-style" htmlFor="taskDescription">
            Task Description:
          </label>
          <br />
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="input-style">
          <label className="label-style" htmlFor="assignedUser">
            Assign To:
          </label>
          <br />

          <input
            type="text"
            id="assignedUser"
            value={assignedUser}
            onChange={(e) => setAssignedUser(e.target.value)}
          />
        </div>
        <button className="addtask-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
