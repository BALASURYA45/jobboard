const express = require('express');
const { getJobs, createJob } = require('../controllers/jobController');

const router = express.Router();

// Job routes
router.get('/', getJobs);
router.post('/', createJob);

module.exports = router;