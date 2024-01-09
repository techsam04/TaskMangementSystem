// AddTask.jsx
import React, { useState } from 'react';
import TaskService from './TaskService';
import TaskList from './TaskList';
const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
        setTitleError('Task Name is required.');
        return;
      }else if(!taskDescription.trim()){
        setDescriptionError('Task Description is required.');
        return;
      }
    TaskService.addTask({ taskName: taskTitle, description: taskDescription }).then(
      (newTask) => {
        // Update the parent component with the new task
        //onTaskAdded(newTask);
        // Clear the form fields after adding the task
        setTaskTitle('');
        setTaskDescription('');
        setTitleError('');
        setDescriptionError('');
      }
    );
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form>
      <div className="form-group">
        <label>
          Task Name:
          <input
            type="text"
            className={`form-control ${titleError ? 'is-invalid' : ''}`}
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          {titleError && <div className="invalid-feedback">{titleError}</div>}
        </label>
        </div>
        <br/>
        <div className="form-group">
        <label>
          Task Description:
          <textarea
           className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
           {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
        </label>
        </div>
        <br />
       
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
