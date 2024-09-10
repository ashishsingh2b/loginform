import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="homepage">
      <h1>Welcome to Our Site</h1>
      <div className="buttons">
        <button onClick={navigateToLogin} className="btn">Go to Login</button>
        <button onClick={navigateToSignup} className="btn">Go to Signup</button>
      </div>
    </div>
  );
};

export default Homepage;
