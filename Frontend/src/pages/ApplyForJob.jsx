import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
const ApplyForJob = () => {
  const { id } = useParams(); 
  const [jobs, setJobs] = useState([]);
  const job = jobs.find(job => job._id === id); 
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    alert("job applied succesful");
    
  };

 

  return (
    <div className="apply-for-job">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="resume"
          placeholder="Paste your resume here"
          value={formData.resume}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForJob;