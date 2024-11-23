import React, { useState } from 'react';

const EditTaskModal = ({ task, setTasks, closeModal }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSaveChanges = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Edit Task</h2>
      <input
        type="text"
        name="title"
        value={updatedTask.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        value={updatedTask.description}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={updatedTask.dueDate}
        onChange={handleInputChange}
      />
      <select
        name="status"
        value={updatedTask.status}
        onChange={handleInputChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSaveChanges}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default EditTaskModal;
