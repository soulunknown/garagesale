import React, { useState } from 'react';

const Signup = () => {
  // Add username and lastName to the initial state
  const [userData, setUserData] = useState({
    name: '',
    lastName: '', // Added lastName
    username: '', // Added username
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementation for form submission goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="First Name" // Updated placeholder for clarity
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName" // New input for last name
        placeholder="Last Name"
        value={userData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username" // New input for username
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
