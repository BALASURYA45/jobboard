import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const JobList = () => {
  const location = useLocation();
  var jobs = location.state || [
    {
      _id: 1,
      title: 'Assistant Engineer/Engineer',
      company: 'Twin City Fan Companies, Ltd.',
      location: 'Ambattur, Chennai',
      salary: '₹22,000 - ₹35,000 per month',
      description: 'Perform bearing selections, drive selections, and review product designs for compliance with engineering principles.'
    },
    {
      _id: 2,
      title: 'Project Management Engineer',
      company: 'HITACHI ENERGY TECHNOLOGY SERVICES PRIVATE LIMITED',
      location: 'Chennai, Tamil Nadu',
      salary: 'Not Disclosed',
      description: 'Ensure engineering activities comply with required safety regulations and contractual requirements.'
    },
    {
      _id: 3,
      title: 'Design Engineer (Industrial Furnace)',
      company: 'Unidos Technology',
      location: 'Chennai, Tamil Nadu',
      salary: 'Up to ₹600,000 per year',
      description: 'Modify existing drawings as per customer requirements; visit customer project sites to inspect layouts.'
    },
    {
      _id: 4,
      title: 'Project Engineer',
      company: 'Meenalokshani Infra Pvt Ltd',
      location: 'Chennai, Tamil Nadu',
      salary: 'Not Disclosed',
      description: 'Provide engineering expertise and technical guidance throughout the project lifecycle.'
    },
    {
      _id: 5,
      title: 'Manager - R&D & Engineering',
      company: 'Adonisstataff Services Pvt. Ltd',
      location: 'Chennai, Tamil Nadu',
      salary: 'Not Disclosed',
      description: 'Oversee research and development activities and manage engineering projects.'
    }
  ];

  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
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