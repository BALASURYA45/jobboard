import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/about-us">AboutUs</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/upload-resume">Upload Resume</Link>
    </nav>
  );
};

export default Navbar;