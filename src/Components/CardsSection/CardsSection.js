import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useState } from 'react'
import NavSidebar from '../../Components/NavSidebar/NavSidebar'
import { useNavigate } from 'react-router-dom'

const CardsSection = ({ list }) => {
  const [close, setClose] = useState(false)
  const [itemStored, setItemStored] = useState([]);
  const [stateUpdate, setStateUpdate] = useState()
  const [cost, setCost] = useState();
  const navigate = useNavigate()
  

  //   // total cost
  const totalCost = () => {
    const a = itemStored.reduce((accum, curr) => {
      return accum + ( curr.price * curr.quantity );
    }, 0)
    setCost(a)
    setStateUpdate(!stateUpdate)
    }

 // handle add
const handleAdd = (res) => {
  setItemStored([...itemStored, res]);  
  totalCost();
  setStateUpdate(!stateUpdate)
  }
  
  
//   // handle remove
  const handleRemove = (res) => {
    const a = itemStored.filter((item) => item?.heading !== res?.heading)      
    setItemStored(a)
  }  

    
  useEffect(() => {
    totalCost()
  }, [itemStored])

  
  return (
    <div>
      <Navbar itemStored={itemStored} setClose={setClose}/>  
      <div className="cardsSection">

        {list.map((res) => {
       const { heading, paragraph, price, category , image} = res;
        return (
          <div className="cardsSection_card">
              <img src={image} alt="" />
              <h5>{heading}</h5>
              <p>{paragraph}</p>
              <span>Price {price}$</span>
            {itemStored?.some((item) => item?.heading === res?.heading) ? <button onClick={() => handleRemove(res)} >Remove</button> : <button onClick={() => handleAdd(res)}>Add to Cart</button>} 
            <button onClick={() => navigate(`/productView/${res?.heading}/${res?.paragraph}/${res?.id}/${res?.price}`)}>View</button>
            </div>
            )
      }) }
         </div>     
         {close && <NavSidebar list={list} setItemStored={setItemStored} stateUpdate={stateUpdate} setStateUpdate={setStateUpdate} totalCost={totalCost} cost={cost} itemStored={itemStored} setClose={setClose}/> }
    </div>
  )
}

export default CardsSection