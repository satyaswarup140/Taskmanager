import React from 'react';

const DeleteConfirmation = ({ taskId, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <h2>Are you sure you want to delete this task?</h2>
      <button onClick={() => onConfirm(taskId)}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
