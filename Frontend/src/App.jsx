import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ResumeUploaderPage from './pages/ResumeUploaderPage';
import AboutUs from './pages/AboutUs';
import ApplyForJob from './pages/ApplyForJob'; // Import the new page
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await axios.get('http://localhost:5000/api/jobs');
    setJobs(response.data);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<Home jobs={jobs} />} />
          <Route path="/jobs/:id" element={<JobDetails jobs={jobs} />} />
          <Route path="/upload-resume" element={<ResumeUploaderPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/applyjob" element={<ApplyForJob jobs={jobs} />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;