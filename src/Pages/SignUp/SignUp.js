import React from 'react'
import { TextField , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div> 
      <div className="signup container-fluid">
        <div className="col-lg-4 col-md-4 col-12 signup_inner"> 
          <div className="signup_heading mx-auto col-lg-4 col-md-4 col-4"><h4 className='text-center'>Create Your Account</h4></div>
          <TextField className='m-2 w-50 inputField' id="standard-basic" label="Enter Your Name" variant="standard" />
          <TextField className='m-2 w-50 inputField' id="standard-basic" type={"password"} label="Enter Your Password" variant="standard" />
          <TextField className='m-2 w-50 inputField' id="standard- basic" type={"email"} label="Enter Your Email" variant="standard" />
          <Button className='my-5' variant="contained">Sign Up</Button>
          <Button className='my-1' onClick={() => navigate("/signIn")} variant="contained">Already Have an Account?</Button>

        </div>
      </div>
    </div>
  )
}

export default SignUp