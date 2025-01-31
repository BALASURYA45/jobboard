const Job = require('../models/Job');
// Get all jobs
exports.getJobs = 

// Create a job
exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  try {
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

  exports.getJobs = 

// Create a job
exports.createApplication = async (req, res) => {
  const application= new Application(req.body);
  try {
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};