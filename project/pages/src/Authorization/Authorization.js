import React, { useState } from 'react';
import './authorization.css';

const Authorization = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="auth-container">
      
      <form onSubmit={handleSubmit} className="auth-form">
       <h2>Log In</h2> <label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </label>
        <button type="submit">Login</button>
        <p>Don't have account? <a href="#" className="signInBtn-link">Sign In</a> </p>
      </form>
    </div>
  );
};

export default Authorization;
