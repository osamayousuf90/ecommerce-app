import React from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { sendSignInLinkToEmail } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  // handle state change value
  const handleStateChangeValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // handle sign up
  const handleSignUp = (e) => {
    const { name, email, password, address } = state;
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be in the authorized domains list in the Firebase Console.
          url: "http://localhost:3000/",
          // This must be true.
          handleCodeInApp: true,
          iOS: {
            bundleId: "com.example.ios",
          },
          android: {
            packageName: "com.example.android",
            installApp: true,
            minimumVersion: "12",
          },
          dynamicLinkDomain: "example.page.link",
        };

        const user = res?.user;
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
          .then(() => {
            alert("Email sended");
          })
          .catch(() => {
            alert("Email did'nt send");
          });

        addDoc(collection(db, "users"), {
          name,
          email,
          password,
          address,
          uid: user?.uid,
          is_Admin: false,
        });
        alert("User Created Succesfully");
        //  navigate("/signIn")
      })
      .catch((err) => {
        alert(err);
        console.log("err ===>", err);
      });
  };

  return (
    <div>
      <div className="signup container-fluid">
        <div className="col-lg-4 col-md-4 col-12 signup_inner">
          <div className="signup_heading mx-auto col-lg-4 col-md-4 col-4">
            <h4 className="text-center">Create Your Account</h4>
          </div>
          <TextField
            onChange={(e) => handleStateChangeValue(e)}
            name="name"
            className="m-2 w-50 inputField"
            id="standard-basic"
            label="Enter Your Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => handleStateChangeValue(e)}
            name="password"
            className="m-2 w-50 inputField"
            id="standard-basic"
            type={"password"}
            label="Enter Your Password"
            variant="standard"
          />
          <TextField
            onChange={(e) => handleStateChangeValue(e)}
            name="email"
            className="m-2 w-50 inputField"
            id="standard- basic"
            type={"email"}
            label="Enter Your Email"
            variant="standard"
          />
          <TextField
            onChange={(e) => handleStateChangeValue(e)}
            name="address"
            className="m-2 w-50 inputField"
            id="standard- basic"
            type={"text"}
            label="Enter Your Address"
            variant="standard"
          />
          <Button
            className="my-5"
            variant="contained"
            onClick={(e) => handleSignUp(e)}
          >
            Sign Up
          </Button>
          <Button
            className="my-1"
            onClick={() => navigate("/signIn")}
            variant="contained"
          >
            Already Have an Account?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
