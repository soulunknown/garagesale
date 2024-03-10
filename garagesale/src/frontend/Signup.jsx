import React, { useState } from 'react';

const Signup = () => {
  // State to store user data
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastName, username, email, password } = userData;

    const backendUrl = 'http://localhost:3000/api/signup'; 

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, lastName, username, email, password
        }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error: ${response.status} - ${message}`);
      }

      const data = await response.json();
      console.log(data);
      alert('Signup successful!');
      // Optionally redirect the user or clear the form here
    } catch (error) {
      console.error('There was a problem with the signup:', error);
      alert('Signup failed!');
    }
  };

  // Render the sign-up form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={userData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
