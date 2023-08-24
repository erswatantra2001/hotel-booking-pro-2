import React, { useState } from 'react'
import './Signup.css';
import imgSrc from '../../pictures/sign.png';
import { Link } from "react-router-dom";

export default function Signuppage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    formData.pass === formData.conpass ? console.log(formData) : alert("password did not matched...")
  };


  return (
    <div id='flex-container'>

      <div id="form">
        <form onSubmit={handleSubmit}>
          <h2>Create a New Account</h2>
          <label class='label' htmlFor="">Name</label><br />
          <input class='input' value={formData.name} onChange={handleChange} type='text' placeholder='Name' name='name' required></input><br /><br />
          <label class='label' htmlFor="">Phone Number</label><br />
          <input class='input' value={formData.phone} onChange={handleChange} type='text' placeholder='Phone Number' name='phone' required></input><br /><br />
          <label class='label' htmlFor="">Email</label><br />
          <input class='input' value={formData.email} onChange={handleChange} type='email' placeholder='Email' name='email' required></input><br /><br />
          <label class='label' htmlFor="">Password</label><br />
          <input class='input' value={formData.pass} type='Password' onChange={handleChange} placeholder='Password' name='pass' required></input><br /><br />
          <label class='label' htmlFor="">Confirm Password</label><br />
          <input class='input' value={formData.conpass} type='Password' onChange={handleChange} placeholder='Confirm Password' name='conpass' required></input><br /><br />
          <input class='checkbox' type="checkbox" />
          <span class="checkmark">I Want to receive about the product,feature updates,events and marketing promotions</span><br /><br />
          {/*page loadimg on clicking the link and image is loading on moving ne page to another*/}
          By creating an account, you agree to the <a href='not found'><u>Terms of use </u></a>and <u>Privacy Policy</u><br /><br />
          <button className='signupbtn' type='submit'><Link to='/NumVerify'>Sign Up </Link></button><br />
          Already have an account?<Link to='/Login'> Login here</Link>
        </form>
      </div>

      <div id="img">
        <img class='imgtag' src={imgSrc} alt="...." />
      </div>

    </div>
  )
}
