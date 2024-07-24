
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = text => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const completeTask = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    setEditingTask(null);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = id => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditingTask(taskToEdit);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onEdit={handleEdit} onDelete={deleteTask} />
    </div>
  );
};

export default App;
