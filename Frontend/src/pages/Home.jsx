import React from 'react';
import JobList from '../components/JobList';

const Home = ({ jobs }) => {
  return (
    <div className="home">
      <h1>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;