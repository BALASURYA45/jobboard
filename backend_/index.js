const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
require('dotenv').config();
const Job=require('./models/Job')
const app = express();
const PORT =8080;
const MONGO_URI = process.env.MONGO_URI;


app.use(cors());
app.use(express.json());


mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  
app.post('/add-job',async(req,res)=>{
  try{
  var {title,description,company,location,salary}=req.body;
  var new_job=new Job({
    title,
    description,
    company,
    location,
    salary,
  })
  await new_job.save();
  res.status(200).json({message:true})
}
catch(err){
  res.status(400).json({message:false});
}
});


app.post('/add-application',async(req,res)=>{
  try{
  var {name,email,tell_about_yourself}=req.body;
  var new_application=new application({
    name,
    email,
    tell_about_yourself
  })
  await new_application.save();
  res.status(200).json({message:true})
}
catch(err){
  res.status(400).json({message:false});
}
});

app.get('/get-job',async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
