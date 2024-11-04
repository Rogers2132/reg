import React, { useState } from 'react';
import './registration.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit} className="reg-form">
        <h2>Sign Up</h2>
        
        <label>
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
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

    

        <button type="submit">
          <div className='text2'>Sign Up</div>
        </button>

        <p>Already have an account? <a href="#" className="signInBtn-link">Sign In</a> </p>
      </form>
    </div>
  );
};

export default Registration;
