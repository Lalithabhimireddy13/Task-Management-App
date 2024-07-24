
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Task = ({ task, onComplete, onEdit, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onComplete(task.id)}>{task.text}</span>
      <div>
        <FaEdit onClick={() => onEdit(task.id)} />
        <FaTrash onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

export default Task;
