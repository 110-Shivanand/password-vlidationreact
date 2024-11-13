import React, { useState } from 'react';
import './App.css';

const PasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (pwd) => {
    const isValid = 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
    setIsValid(isValid);
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    validatePassword(pwd);
  };

  return (
    <div className="password-validation">
      <h2>Password Validation</h2>
      <input 
        type="password" 
        placeholder="Enter password" 
        value={password} 
        onChange={handleChange}
        className={`password-input ${isValid ? 'valid' : 'invalid'}`}
      />
      <div className={`validation-message ${isValid ? 'valid' : 'invalid'}`}>
        {isValid ? 'Password is valid' : 'Password must be at least 8 characters, with uppercase, lowercase, a number, and a special character.'}
      </div>
    </div>
  );
};

export default PasswordValidation;
