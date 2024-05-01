import React from "react";
import "./index.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="tasklist-container">
      <h2 className="tasks-heading">Tasks:</h2>
      <ul className="total-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="list-element">
              <h1 className="project-heading">{task.taskName}</h1>
              <p className="project-description">{task.taskDescription}</p>
              <p className="assinged-to">
                Assigned to:
                <span className="assigned-value">{task.assignedUser}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
