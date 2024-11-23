import React, { useState } from 'react';

const AddTaskForm = ({ tasks, setTasks }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { ...formData, id: Date.now() };
    setTasks([...tasks, newTask]);
    setFormData({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleAddTask} className="add-task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleInputChange}
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
