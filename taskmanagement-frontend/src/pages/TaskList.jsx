// TaskList.jsx
import React, { useState, useEffect } from 'react';
import TaskService from './TaskService';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');
  const [editedTaskDescription, setEditedTaskDescriptoin] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [buttonText, setButtonText] = useState("Mark as Complete");
  useEffect(() => {
    // Fetch tasks from backend on component mount
    TaskService.getTasks().then((data) => setTasks(data));
  }, []);

  const handleEdit = (taskId, currentTitle,currentDescription) => {
    setEditableTaskId(taskId);
    setEditedTaskTitle(currentTitle);
    setEditedTaskDescriptoin(currentDescription);
  };

  const handleSave = (taskId) => {
    // Update the task on the backend with the edited title
    TaskService.editTask({taskName:editedTaskTitle,description:editedTaskDescription},taskId).then(() => {
      // Update the frontend task list
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.taskId === taskId ? { ...task, taskName: editedTaskTitle,description:editedTaskDescription } : task
        )
      );

      // Reset editable state
      setEditableTaskId(null);
      setEditedTaskTitle('');
      setEditedTaskDescriptoin('');
    });
  };
  const handleDelete = (taskId) => {
    TaskService.deleteTask(taskId).then(() => {
      // Update tasks after deletion
      setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
    });
  };

  // Similar functions for updating and marking completion
  const handleMarkComplete = (buttntext) => {
    // Implement mark as complete functionality
   setButtonText(buttntext);
  };

  const handleCancel = () => {
    // Reset editable state
    setEditableTaskId(null);
    setEditedTaskTitle('');
    setEditedTaskDescriptoin('');
  };

  return (
    <div>
      <h2>To-do List</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Actions</th>
            <th>Complete</th>
          </tr>
        </thead>
        
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskId}>
              <td>{task.taskId}</td>
              <td>
                {editableTaskId === task.taskId ? (
                  <input
                    type="text"
                    value={editedTaskTitle}
                    onChange={(e) => setEditedTaskTitle(e.target.value)}
                  />
                ) : (
                  task.taskName
                )}
              </td>
              <td>
              {editableTaskId === task.taskId ? (
                  <input
                    type="text"
                    value={editedTaskDescription}
                    onChange={(e) => setEditedTaskDescriptoin(e.target.value)}
                  />
                ) : (
                  task.description
                )}
              </td>
              <td>
                {editableTaskId === task.taskId ? (
                  <div>
                    <button onClick={() => handleSave(task.taskId)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(task.taskId, task.taskName, task.description)}>
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(task.taskId)}>Delete</button>
              </td>
              <td>
                {editableTaskId === task.taskId ? (
                
                <button onClick={() => handleMarkComplete("mark as completed")}>{buttonText}</button>
              ) : (
                <button onClick={() => handleMarkComplete("completed")}>{buttonText}</button>
              )}
                </td>
            </tr>
          ))}
        </tbody>   
        </table>
    </div>
  );

};

export default TaskList;
