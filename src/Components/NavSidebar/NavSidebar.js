import React from 'react'
import { useState , useEffect } from 'react';

const NavSidebar = ({ setClose, value , cost , setCost , setStateUpdate , totalCost}) => {
  
  useEffect(() => {
    totalCost() 
   }, [value])
  
  return (
    <div>
        <div className="navSidebar">
          <i onClick={() => { setClose(false) }} class="fa-solid fa-x"></i>          
            <div className="navSidebar_inner">
          <h5>Cart</h5> 
          
          {value?.map((res) => {
            const { heading, paragraph, price, image } = res;
            return (
              <div className="navSidebar_cartList">
              <img src={image} alt="No Image" />
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <span>Price {[price]}$</span>
              </div>
            )
          })}
          
          <h2 className='total'>Total Cost</h2>
          <span>{cost}</span>
          </div>     
        </div>
    </div>
  )
}

export default NavSidebar