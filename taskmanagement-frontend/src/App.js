import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import AddTask from './pages/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TaskList from './pages/TaskList';

function App(){
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/tasks">
            Task Manager
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks">
                  List of Tasks
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr />
        <Routes>
        <Route path="/add" element={<AddTask/>} />
        <Route path="/tasks" element={<TaskList/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
