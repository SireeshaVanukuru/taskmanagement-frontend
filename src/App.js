import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-container">
      <h1 className="main-heading">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
