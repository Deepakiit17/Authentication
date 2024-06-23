// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Login setAuth={setIsAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <SignUp setAuth={setIsAuthenticated} />} />
          <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
