import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <Link to={`/jobs/${job._id}`} className="view-details">View Details</Link>
          </div>
        ))
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;