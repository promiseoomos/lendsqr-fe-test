import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, createBrowserRouter, Outlet } from "react-router-dom"



function App() {
  const [loggedIn, setLoggedIn ] = useState(true);

  return (
    <div>
        <Outlet />
    </div>
  );
}

export default App;
