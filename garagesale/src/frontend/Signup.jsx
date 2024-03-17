// Signup.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios for HTTP requests

const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/signup', userData);
      console.log(response.data); // Process success response
    } catch (error) {
      console.error('There was a problem with the signup:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        value={userData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
