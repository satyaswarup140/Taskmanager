import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditTaskModal from './EditTaskModal';
import DeleteConfirmation from './DeleteConfirmation';

const TaskList = ({ tasks, setTasks }) => {
  const [editTask, setEditTask] = useState(null);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setEditTask(task)}>
            <AiFillEdit /> Edit
          </button>
          <button onClick={() => setDeleteTaskId(task.id)}>
            <AiFillDelete /> Delete
          </button>
        </div>
      ))}
      {editTask && (
        <EditTaskModal
          task={editTask}
          setTasks={setTasks}
          closeModal={() => setEditTask(null)}
        />
      )}
      {deleteTaskId && (
        <DeleteConfirmation
          taskId={deleteTaskId}
          onConfirm={handleDeleteTask}
          onCancel={() => setDeleteTaskId(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
