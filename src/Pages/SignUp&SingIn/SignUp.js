import React from 'react'
import { TextField , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../Firebase/firebase"
import { useState } from 'react'

const SignUp = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({ name: "", email: "", password: "" })
  
  // handle state change value
  const handleStateChangeValue = (e) => {
    setState({...state , [e.target.name] : e.target.value})
  }
 
  // handle sign up
  const handleSignUp = (e) => {
    const { name, email, password } = state;
    e.preventDefault();
    var a = createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log("res ===>", res)
      alert("Succesfully User Created")
    }).catch((err) => {
      console.log("err ===>", err)
    })  
  }
   

  return (
    <div> 
      <div className="signup container-fluid">
        <div className="col-lg-4 col-md-4 col-12 signup_inner"> 
          <div className="signup_heading mx-auto col-lg-4 col-md-4 col-4"><h4 className='text-center'>Create Your Account</h4></div>
          <TextField onChange={(e) => handleStateChangeValue(e)} name='name' className='m-2 w-50 inputField' id="standard-basic" label="Enter Your Name" variant="standard" />
          <TextField onChange={(e) => handleStateChangeValue(e)} name='password' className='m-2 w-50 inputField' id="standard-basic" type={"password"} label="Enter Your Password" variant="standard" />
          <TextField onChange={(e) => handleStateChangeValue(e)} name='email' className='m-2 w-50 inputField' id="standard- basic" type={"email"} label="Enter Your Email" variant="standard" />
          <Button className='my-5' variant="contained" onClick={(e) => handleSignUp(e)} >Sign Up</Button>
          <Button className='my-1' onClick={() => navigate("/signIn")} variant="contained">Already Have an Account?</Button>

        </div>
      </div>
    </div>
  )
}

export default SignUp