import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ResumeUploaderPage from './pages/ResumeUploaderPage';
import AboutUs from './pages/AboutUs';
import ApplyForJob from './pages/ApplyForJob'; 
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/joblist" element={<JobList />}/>
          <Route path="/jobs/:id" element={<JobDetails/>} />
          <Route path="/upload-resume" element={<ResumeUploaderPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/applyjob" element={<ApplyForJob />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;