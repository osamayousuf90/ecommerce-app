import React from 'react'
import logo from "../../Assets/Images/logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = ({setClose , value}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="navbar">
            <img src={logo} alt="" /> 

            <div className="navbar_links">
                <p onClick={() => navigate("/welcome")}>Home</p>
                <p onClick={() => setClose(true)}>Cart { value.length } <i class="fa-solid fa-cart-shopping"></i></p>  
            </div>  
        </div>      
    </div>
  )
}

export default Navbar