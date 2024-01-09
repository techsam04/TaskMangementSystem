import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    // Update the tasks list with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <AddTask onTaskAdded={handleTaskAdded}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskPage;
