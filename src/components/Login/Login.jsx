import React, { useState } from 'react'
import './Login.css';
import imgSrc from '../../pictures/picphot.png'
import { FaInstagram,FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";



export default function Login() {
  const [formData, setFormData] = useState({

    email: "",

    pass: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", formData.email)
    let item = localStorage.getItem('Email')

    console.log(item);
    if (item === formData.email) {
      alert("already customer")
      console.log(formData)
    }
    else {
      console.log("hel")
    }



  };


  return (
    <div id='flex-container'>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <h1><b>Login Your Account</b></h1>
          if you don't have an register account <br /><br />
          You can <Link to='/Signuppage'> Register here</Link><br /><br />
          <label htmlFor="">Email</label><br />
          <input class='input' value={formData.email} onChange={handleChange} type='text' placeholder='Email' name='email'></input><br /><br />
          <label htmlFor="">Password</label><br />
          <input class='input' value={formData.pass} type='Password' onChange={handleChange} placeholder='Password' name='pass'></input><br /><br />
          <div className="flex">
            <div class='left'>
              <input class='checkbox' type="checkbox" />
              <span class="checkmark">  Remember Me</span>
            </div>
            <div className="right">
              <a href="...." class="forgotpassword">Forgot Password</a>
            </div>
          </div><br /><br />
          <button class='loginbtn' type='submit'><b><Link to='/Loggedin'>Login</Link></b></button>
          <h6>or continue with </h6>
          <div class='flex-icon'>
          <div class='icons'>
            <FaInstagram size={32} color="purple" />
            <FcGoogle size={32} />
            <FaFacebook size={32} color="#1877F2" />
          </div>
          </div>
        </form>

      </div>

      <div id="img"><img class='imgtag' src={imgSrc} alt="" /></div>
    </div>
  )
}
