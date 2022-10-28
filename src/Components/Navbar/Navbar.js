import React from "react";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const Navbar = ({ setClose, itemStored }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    auth.signOut();
    navigate("/signin")
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
