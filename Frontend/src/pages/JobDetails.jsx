import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetails = ({ jobs }) => {
  const { id } = useParams(); // Get the job ID from the URL
  const job = jobs.find(job => job._id === id); // Find the job by ID

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <Link to={`/apply/${job._id}`} className="apply-button">Apply for this Job</Link>
    </div>
  );
};

export default JobDetails;