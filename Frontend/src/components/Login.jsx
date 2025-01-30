import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  var[job,setJob]=useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var req=axios.get('http://localhost:8080/get-job').then((res)=>{
      setJob(res.data);
      navigate('/applyjob',{state:res.data});
    })
    
  };
 /* const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.get('http://localhost:8080/get-job');
    setJob(res.data);
    navigate('/applyjob', { state: res.data }); // Redirect to Apply page
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};*/


  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;