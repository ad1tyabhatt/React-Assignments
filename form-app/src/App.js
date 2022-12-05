import { useState } from 'react';
import './App.css';

function App() {

  const [value,setValue] = useState({
    firstname:"",
    lastname:"",
    email:"",
  });

  const [submit,setSubmit] = useState(false)
  const [valid,setValid] = useState(false);

  const handleFirstname = (event)=>{
    setValue({...value,firstname:event.target.value})
  }

  const handleLastname = (event)=>{
    setValue({...value,lastname:event.target.value})
  }

  const handleEmail = (event)=>{
    setValue({...value,email:event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(value.firstname && value.lastname && value.email){
      setValid(true)
    }
    setSubmit(true);
  }


  return (
    <div className='main-container'>
      <div className="form-container">
        <form className='forms' onSubmit={handleSubmit}>
        {submit && valid ? <div className="success">Success! Thank you for registering...</div>: null}
          <input 
          value={value.firstname}
          onChange={handleFirstname}
          type="text"
          className='form-input'
          id="firstname"
          placeholder='First Name' />
          {submit && !value.firstname ? <span>Please enter a first name</span> : null}
          <input 
          value={value.lastname}
          onChange={handleLastname}
          type="text"
          className='form-input'
          id="lastname"
          placeholder='Last Name' />
          {submit && !value.lastname ? <span>Please enter a last name</span> : null }
          <input 
          value={value.email}
          onChange={handleEmail}
          type="email"
          className='form-input'
          id="email"
          placeholder='Email' />
          {submit && !value.email ?<span>Please enter an email</span> : null}
          <button
          className='submit-btn'>Register</button>
        </form>
      </div>
    </div>

  );
}

export default App;
