import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyForJob = ({ jobs }) => {
  const { id } = useParams(); // Get the job ID from the URL
  const job = jobs.find(job => job._id === id); // Find the job by ID
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., API call)
    console.log('Application Data:', formData);
    alert('Applied successfully!'); // Show success message
    navigate('/jobs'); // Redirect to job list page after submission
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="apply-for-job">
      <h1>Apply for {job.title}</h1>
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