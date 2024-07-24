// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    } else {
      setTaskText('');
    }
  }, [editingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    if (editingTask) {
      editTask(editingTask.id, taskText);
    } else {
      addTask(taskText);
    }
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Add a task..."
        required
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
