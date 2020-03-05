import React from "react";
import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Dashboard from "./components/Dashboard/Dashboard";

import { Route, Link } from "react-router-dom";

//Navbar
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/loginForm">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/LoginForm" component={LoginForm} />
      <Route path="/employeeList" component={EmployeeList} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
