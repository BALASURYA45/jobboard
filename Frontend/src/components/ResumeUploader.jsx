import React, { useState } from 'react';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform file upload logic here (e.g., API call)
    console.log('File to upload:', file);
    alert('Resume uploaded successfully!');
  };

  return (
    <div className="resume-uploader">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ResumeUploader;