import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './auth.css'


const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: ''})
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user with the given email and password exists in the localStorage
    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      // If user exists, redirect to Home page
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/homepage');
    } else {
      // If user doesn't exist, show error message
      alert('Invalid email or password');
    }

    
    // get the user data from the localStorage if matches take the user to Home page


  }
  const handleChange = (e) => {
    // e.preventDefault();
    setCredentials({...credentials ,[e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input email-input">
          <input type="email" placeholder='Enter you email..' required value={credentials.email} name="email" onChange={handleChange} />
        </div>
        <div className="input password-input">
          <input type="password" placeholder='Enter you password' required value={credentials.password} name="password" onChange={handleChange} />
        </div>
        <button type='submit'>Login</button>
        <div className="account">
          <span>Don't have an account?</span>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;