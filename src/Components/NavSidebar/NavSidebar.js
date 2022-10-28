import React from 'react'
import { useState , useEffect } from 'react';

const NavSidebar = ({ setClose, itemStored, cost, totalCost , setStateUpdate , stateUpdate , setItemStored , list}) => {


  
//   // handle add quantity
const handleAddQuantity = (res) => {
  const fIndex = itemStored.findIndex((item) => item?.heading === res?.heading)
  itemStored[fIndex].quantity += 1  
  totalCost()
  setStateUpdate(!stateUpdate)
}


//   // handle decrease quantity
  const handleRemoveQuantity = (res) => {
  const fIndex = itemStored.findIndex((item) => item?.heading === res?.heading)
  if(itemStored[fIndex].quantity === 1) {
    const a = itemStored.filter((item) => {
     return item?.heading !== res?.heading
    })
    setItemStored(a)
  } else {
  itemStored[fIndex].quantity -= 1
  totalCost()
  setStateUpdate(!stateUpdate)
  }
  }
  
  
  // handle delete
  const handleDelete = (res) => {
    const removeFilter = itemStored?.filter((a) => {
      return a?.heading !== res?.heading;
    })
    setItemStored(removeFilter)
  }
  
  useEffect(() => {
    totalCost() 
   }, [itemStored , cost])
  
  return (
    <div>
        <div className="navSidebar">
          <i onClick={() => { setClose(false) }} class="fa-solid fa-x"></i>          
            <div className="navSidebar_inner">
          <h5>Cart</h5> 
          
          {itemStored?.map((res) => {
            const { heading, paragraph, price, image , quantity } = res;
            return (
              <div className="navSidebar_cartList">
              <img src={image} alt="No Image" />
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <button onClick={() => { handleRemoveQuantity(res) }}>-</button> <span>{price}$</span> <button onClick={() => { handleAddQuantity(res)}}>+</button> x <span>{quantity}</span> 

                <br /> <br />

                <button onClick={() => handleDelete(res)}>Delete</button>
              </div>
            )
          })}
          
          <h2 className='total'>Total Cost</h2>
          <span className='cost'>{cost}$</span>
          </div>     
        </div>
    </div>
  )
}

export default NavSidebar