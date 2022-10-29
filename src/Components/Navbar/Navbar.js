import React from "react";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const Navbar = ({ setClose, itemStored }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then((res) => {
    window.localStorage.clear();
    navigate("/signin")
    }).catch(() => {
      console.log("Some Error Occured");
    })
  }  

  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="" />

        <div className="navbar_links">
          <p onClick={() => navigate("/welcome")}>Home</p>
          <p onClick={() => setClose(true)}>
            Cart {itemStored.length} <i class="fa-solid fa-cart-shopping"></i>
          </p>
          <p onClick={() => handleLogout()} >Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
