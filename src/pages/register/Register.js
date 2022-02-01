import React from 'react';
import "./register.css";

export default function Register() {
  return <div className='register'>
      <span className='registerTitle'>Register</span>
  <form className='registerForm'>
      <label>Email</label>
      <input className="registerInput" type="text" placeholder='Enter your Email   '></input>
      <label>Password</label>
      <input className="registerInput" type="password" placeholder='Enter your Password   '></input>
      <button className='registerButton'>Register</button>
      <button className='loginButton'>Login</button>

  </form>
  </div>;
}
