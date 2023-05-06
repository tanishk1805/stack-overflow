
import React from 'react'
import { useState } from 'react'
import icon from '../../assets/icon.png'
import './AboutAuth'
import AboutAuth from './AboutAuth'
import './Auth.css'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {login,Signup} from '../../actions/auth'


const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[signup,setSignup]=useState(false);
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const handleSwitch=()=>{
    setSignup(!signup);
  }
  const handleSubmit=(e)=>{
    if(!email && !password){
      alert("Please enter name and password to continue")
    }
    if(signup){
      if(!name){
        alert("Please enter a name");
      }
      dispatch(Signup({name,email,password},navigate));

    }
    else{
      dispatch(login({email,password},navigate));
    }
    e.preventDefault();
    
  }
  return (
    <section  className='auth-section'>
       {signup && <AboutAuth/>}
    <div className='auth-container-2'>
    {!signup && <img className='login-logo' src={icon} alt='stack flow'/>}
      <form onSubmit={handleSubmit}>
        
        {signup && 
        <label htmlFor='display'>
          <h4>Display Name</h4>
          <input type='text' name='display' id='display' onChange={(e)=>{setName(e.target.value)}} ></input>

        </label> }
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>

        </label>
        <label htmlFor='password'>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <h4>Password</h4>
          <p style={{color:'#007ac6',fontSize:'13px'}}>{!signup && 'Forgot Password ?'}</p>
          </div>
          <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}></input>

        </label>
        {signup && (<p style={{color:'#666767', fontSize:'13px'}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p>)}
        {signup && (<label className='check' htmlFor='check'>
          <input type='checkbox' name='check' id='check'></input>
          <p style={{ fontSize:'13px'}}>Opt-in to receive occasional product <br/>updates, user research invitations,<br/> company announcements, and digests.
</p>

        </label>)}
        <button type='submit' className='auth-btn'>{signup?'Sign up':'Log in'}</button>
      </form>
     {signup && (<p style={{color:'#666767', fontSize:'13px'}}>By clicking “Sign up”, you agree to our terms of <br/><span style={{color:'#007ac6'}}>service, privacy policy </span>
    and  <span style={{color:'#007ac6'}}> cookie policy</span> </p>)}
      <p>
        {signup?'Already have a account' : `Don't have a account ?` }
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{signup?'Log in' :'Sign up'}</button>
        </p>
   </div>
   </section>
  )
}

export default Auth
