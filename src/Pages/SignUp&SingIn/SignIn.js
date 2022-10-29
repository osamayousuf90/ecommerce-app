import React from 'react'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../Firebase/firebase"
import { useState } from 'react'
import { getDocs , collection  } from 'firebase/firestore'


const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const [usersList , setUsersList] = useState([])

  
    // handle state change value
    const handleStateChangeValue = (e) => {
      setState({...state , [e.target.name] : e.target.value})
    }
   

  // handle sign in
  const handleSignIn = () => {
    
    const { email, password } = state;
    var userAdminArray = [];

    getDocs(collection(db, "users")).then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        var user = doc.data();
        userAdminArray.push(user)

        var foundUserAdmin = userAdminArray?.find((res) => {
          return res?.is_Admin === true
        })

     

        signInWithEmailAndPassword(auth, email, password).then((res) => {
          if (foundUserAdmin?.uid === res?.user?.uid) {
            navigate("/admin")
          } else {
            navigate("/welcome")
         }
        }).catch((err) => {
          // alert(err);
          console.log("err ===>", err);
        })
      })
    
    })
  
  }
  

  return (
    <div> 
    <div className="signup container-fluid">
      <div className="col-lg-4 col-md-4 col-12 signup_inner"> 
        <div className="signup_heading mx-auto col-lg-4 col-md-4 col-4"><h4 className='text-center'>Sign In</h4></div>
        <TextField onChange={(e) => handleStateChangeValue(e)} name="email" className='m-3 w-50 inputField' id="standard- basic" type={"email"} label="Enter Your Email" variant="standard" />
        <TextField onChange={(e) => handleStateChangeValue(e)} name="password" className='m-3 w-50 inputField' id="standard-basic" type={"password"} label="Enter Your Password" variant="standard" />
        <Button onClick={() => handleSignIn()} className='my-5' variant="contained">Sign In</Button>
        <Button className='my-1' onClick={() => navigate("/")} variant="contained">Does'nt Have an Account?</Button>

      </div>
    </div>
  </div>
  )
}

export default SignIn