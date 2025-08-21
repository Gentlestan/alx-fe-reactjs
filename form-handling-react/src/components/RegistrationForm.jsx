import React, { useState } from 'react';

function RegistrationForm() {
 const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');


  const [errors, setErrors] = useState({});

  

  const validate = () => {
    let newError = {}

    if(!username.trim()){
        newError.username = "name is required"
    }
    if(!email){
      newError.email = "email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      newError.email = "invalid email"
    }
    if(password.length < 6){
      newError.password = "password must be greater than 6"
    }
    if(confirmPassword !== password){
      newError.confirmPassword = 'password mismatch'
    }
    return newError
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
    }else {
     
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-white w-full max-w-md"
      >
        {/* Name */}
        <div className="flex items-center gap-2">
          <label htmlFor="username" className="w-32 font-bold">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="w-32 font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="flex items-center gap-2">
          <label htmlFor="password" className="w-32 font-bold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>

        {/* Confirm Password */}
        <div className="flex items-center gap-2">
          <label htmlFor="confirmPassword" className="w-32 font-bold">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
        </div>

        {/* Button */}
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
