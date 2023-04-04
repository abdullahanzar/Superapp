import React from 'react'
import Party from "./Components/Sign Up Age/Party.png"
import './SignUp.css'
import FormArea from './FormArea'


export default function SignUp() {
  return (
    <main>
    <div className='info'>
        <div><p>Already have an account?</p>  
        <button>LOGIN</button></div>
        <div>
            <h1>Discover new things on Superapp</h1>
        </div>
    </div>
    <img src={Party} style={{maxHeight: "100%"}}/>
    <hr />
    <FormArea />
    </main>
  )
}
