
const API_BASE_URL = 'http://localhost:8080';

const TaskService = {
  getTasks: async () => {
    const response = await fetch(`${API_BASE_URL}/tasks/getall`);
    return response.json();
  },

  addTask: async ({taskName,description}) => {
    const response = await fetch(`${API_BASE_URL}/tasks/add`, {
      method: 'POST',
      headers:{
        "Content-type":"application/json;charset=UTF-8"
      },
      body: JSON.stringify(
        { taskName,
          description}),
    });
    return response.json();
  },

  deleteTask: async (taskId) => {
    const response = await fetch(`${API_BASE_URL}/tasks/delete/${taskId}`, {
      method: 'DELETE',
    });
    var msg;
    if (response.ok) {
        msg = await response.text();
      } else {
        // Handle error cases if needed
        msg = "Failed to delete!";
      }
      return msg;
  },

  editTask: async ({taskName,description},taskId) => {
    const response = await fetch(`${API_BASE_URL}/tasks/update/${taskId}`,{
        method: 'PUT',
        headers:{
            "Content-type":"application/json;charset=UTF-8"
          },
          body: JSON.stringify(
            { taskName,
              description}),
    });
    return response.json();
  }
  // Similar functions for updating tasks and marking completion
};

export default TaskService;
