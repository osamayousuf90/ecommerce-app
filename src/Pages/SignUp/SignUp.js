import React from 'react'
import { TextField } from '@mui/material'

const SignUp = () => {
  return (
    <div>
      <div className="signup container-fluid">
        <div className="col-lg-4 col-md-4 col-12 signup_inner"> 
          <div className="signup_heading mx-auto col-lg-4 col-md-4 col-4"><h4 className='text-center'>Sign Up</h4></div>
          <TextField className='m-2 w-50 inputField' id="standard-basic" label="Enter Your Name" variant="standard" />
          <TextField className='m-2 w-50 inputField'id="standard- basic" type={"email"} label="Enter Your Email" variant="standard" />
          <TextField className='m-2 w-50 inputField' id="standard-basic" label="Enter Your Address" variant="standard" />
          <TextField className='m-2 w-50 inputField' id="standard-basic" type={"password"} label="Enter Your Password" variant="standard" />
          <TextField className='m-2 w-50 inputField' id="standard-basic" label="Enter a Name" variant="standard" />
        </div>
      </div>
    </div>
  )
}

export default SignUp