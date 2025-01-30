import React, { useState } from 'react';

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    setJob({
      title: '',
      description: '',
      company: '',
      location: '',
      salary: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={job.title}
        onChange={(e) => setJob({ ...job, title: e.target.value })}
      />
      <textarea
        placeholder="Job Description"
        value={job.description}
        onChange={(e) => setJob({ ...job, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Company"
        value={job.company}
        onChange={(e) => setJob({ ...job, company: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={job.location}
        onChange={(e) => setJob({ ...job, location: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salary"
        value={job.salary}
        onChange={(e) => setJob({ ...job, salary: e.target.value })}
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;