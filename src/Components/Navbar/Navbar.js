import React from 'react'
import logo from "../../Assets/Images/logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="navbar">
            <img src={logo} alt="" /> 

            <div className="navbar_links">
                <p onClick={() => navigate("/welcome")}>Home</p>
                <p>Cart</p>  
            </div>  
        </div>      
    </div>
  )
}

export default Navbar