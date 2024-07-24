// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={onComplete} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
