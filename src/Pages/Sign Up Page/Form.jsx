import React, {useState, useRef, useEffect} from 'react'
import './Form.css'
import Error from './Error'
import Warnings from './Warnings';

export default function () {
    const Name = useRef();
    const Username = useRef();
    const Email = useRef();
    const Phonenumber = useRef();
    const Terms = useRef();

    const [valid, setValid] = useState(false)

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        phonenumber: "",
        terms: false
    })

    const [errText, setErrText] = useState({
        name: "",
        username: "",
        email: "",
        phonenumber: "",
        terms: ""
    })

    const [warnText, setWarnText] = useState({
        name: "",
        username: "",
        email: "",
        phonenumber: "",
        terms: ""
    })

    let handleChange = (event) => {
        setForm({...form, [event.target.name] : event.target.value})  
    }

    const validate = (e) => {
        if(valid===false)
        e.preventDefault();
    } 

    function check() {
        let k=0;
        if(!form.name || !form.username || !form.email || !form.phonenumber) { 
        console.log("not found")
        if(!form.name)
        setErrText({...errText, name:"Please enter a name"})
        if(!form.username)
        setErrText((prev)=>({...prev , username: "Please enter a username"}))
        if(!form.email)
        setErrText((prev)=>({...prev , email: "Please enter an email"}))
        if(!form.phonenumber)
        setErrText((prev)=>({...prev , phonenumber: "Please enter a phone number"}))
        setValid(false)
        }
        else if(form.email.search("@")==-1) {
        setErrText({...errText , email: "Please enter a correct email."})
    }
        else setValid(true)
    }

  return (
    <div>
        <form action="/" onSubmit={validate}>
            <input type="text" ref={Name} name="name" id="name" value={form.name} placeholder='Name' onChange={handleChange} minLength={2} required/>
            <div>
                <Error message={errText.name}/>
            </div>
            <input type="text" ref={Username} name="username" id="username" value={form.username} placeholder='Username' maxLength={40} onChange={handleChange} required/>
            <div>
                <Error message={errText.username}/>
            </div>
            <input type="email" ref={Email} name='email' id='email' placeholder='Email' value={form.email} onChange={handleChange} required/>
            <div>
                <Error message={errText.email} />
            </div>
            <input type="tel" ref={Phonenumber} name='phonenumber' id='phonenumber' placeholder='Mobile' pattern='[0-9]{10}' value={form.phonenumber} onChange={handleChange} required />
            <div>
                <Error message={errText.phonenumber} />
            </div>
            <div>
            <input type="checkbox" ref={Terms} name='sharedata' id='sharedata' value={form.terms} onChange={handleChange} required/>
            <label htmlFor="sharedata">Share my registeration data with superapp</label>
            <div><Error message={errText.terms} /></div>
            </div>
            <button onClick={check} formNoValidate>Sign Up</button>
        </form>
    </div>
  )
}
