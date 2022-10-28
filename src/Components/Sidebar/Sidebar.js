import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../../Firebase/firebase'

const Sidebar = ({index}) => {
  const [select, setSelect] = useState(1);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
    window.location.reload(false);
    localStorage.clear();
    auth.signOut()
  }

  return (
    <div>
    <div className="sidebar">
        <div className="sidebar_profile">
          <Link to="/employers"><img src={""} /></Link>    
        </div>    
        <div className="sidebar_menu">
          <p className={index === "1" && "selected"} onClick={() => { setSelect(1); navigate("/admin") }}><i className="fa-solid fa-users"></i>All Items</p>
          <p className={index === "2" && "selected"} onClick={() => { setSelect(2); navigate("/") }}><i className="fa-solid fa-calendar-check"></i>All User</p>  
          <button onClick={() => handleLogout()} className='logout'>LOGOUT</button>              
        </div>      
    </div>      
    </div>
  )
}

export default Sidebar