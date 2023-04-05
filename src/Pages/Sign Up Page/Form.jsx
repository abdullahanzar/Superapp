import React, {useState, useRef, useEffect} from 'react'
import './Form.css'
import Error from './Error'


export default function () {
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

    const handleChangeTerms = ()=>{
        setForm(prev => ({...prev, terms: true}))
        if(form.terms==true)
        setForm(prev => ({...prev, terms: false}))
        setErrText(prev => ({...prev, terms: ""}))
    }

    let handleChange = (event) => {
        setForm({...form, [event.target.name] : event.target.value})
        if(event.target.name=="name")
        setErrText(prev=>({...prev, name:""}))
        if(event.target.name=="username")
        setErrText(prev=>({...prev, username:""}))
        if(event.target.name=="email")
        setErrText(prev=>({...prev, email:""}))
        if(event.target.name=="phonenumber")
        setErrText(prev=>({...prev, phonenumber:""}))
    }

    const validate = (e) => {
        if(valid===false)
        e.preventDefault();
    } 

    function check() {
        let k=0;
        if(!form.name || !form.username || !form.email || !form.phonenumber || !form.terms) { 
        console.log("not found")
        if(!form.name)
        setErrText({...errText, name:"Please enter a name"})
        if(!form.username)
        setErrText((prev)=>({...prev , username: "Please enter a username"}))
        if(!form.email)
        setErrText((prev)=>({...prev , email: "Please enter an email"}))
        if(!form.phonenumber)
        setErrText((prev)=>({...prev , phonenumber: "Please enter a phone number"}))
        if(!form.terms)
        setErrText((prev)=>({...prev , terms: "Please agree to the above terms."}))
        setValid(false)
        }
        else if(form.email.search("@")==-1) {
        setErrText({...errText , email: "Please enter a correct email with @ sign."})
        }
        else if(/\d/.test(form.phonenumber)==false) {
        setErrText((prev)=>({...prev , phonenumber: "Please enter a valid phone number."}))
        }
        else if(form.phonenumber.length<=3) {
            setErrText((prev)=>({...prev , phonenumber: "Phone number should be of more than 3 digits."}))
        }
        else setValid(true)
    }

  return (
    <div>
        <form action="/" onSubmit={validate}>
            <input type="text" name="name" id="name" value={form.name} placeholder='Name' onChange={handleChange} minLength={2} required/>
            <div>
                <Error message={errText.name}/>
            </div>
            <input type="text" name="username" id="username" value={form.username} placeholder='Username' maxLength={40} onChange={handleChange} required/>
            <div>
                <Error message={errText.username}/>
            </div>
            <input type="email" name='email' id='email' placeholder='Email' value={form.email} onChange={handleChange} required/>
            <div>
                <Error message={errText.email} />
            </div>
            <input type="tel" name='phonenumber' id='phonenumber' placeholder='Mobile' pattern='[0-9]{10}' value={form.phonenumber} onChange={handleChange} required />
            <div>
                <Error message={errText.phonenumber} />
            </div>
            <div>
            <input type="checkbox" name='termsValue' id='termsValue' value={form.terms} checked={form.terms} onChange={handleChangeTerms} required/>
            <label htmlFor="sharedata">Share my registeration data with superapp</label>
            <div><Error message={errText.terms} /></div>
            </div>
            <button onClick={check} formNoValidate>Sign Up</button>
        </form>
    </div>
  )
}
