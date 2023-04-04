import React from 'react'
import './FormArea.css'
import superapp from './Components/Sign Up Age/Super app.png'
import Form from './Form'

export default function FormArea() {
  return (
    <div className="formArea">
        <img src={superapp} style={{width: "12rem"}} alt="SUPERAPP" />
        <br />
        <p>Create your new account</p>
        <div className='choice'>
            <p>Email</p> 
            <hr />
            <p>Google</p>
        </div>
        <Form />
        <div className='tandc'>
        <p>By clicking on Sign up. you agree to Superapp <span style={{color:'#72DB73'}} >Terms and Conditions of Use</span></p>
        <br />
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head <span style={{color:'#72DB73'}} >Superapp Privacy Policy</span></p>
        </div>    
    </div>
  )
}
