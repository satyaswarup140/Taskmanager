import React, { createContext, useState, useEffect } from 'react';

// Create the Task Context
const TaskContext = createContext();

// Task Provider Component
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initialization
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage when tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
