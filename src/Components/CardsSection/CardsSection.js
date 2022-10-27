import React from 'react'
import { db } from '../../Firebase/firebase'
import { useEffect } from 'react'
import { getDocs , collection } from 'firebase/firestore'
import Navbar from '../../Components/Navbar/Navbar'
import { useState } from 'react'
import NavSidebar from '../../Components/NavSidebar/NavSidebar'


const CardsSection = ({ list }) => {
  const [close, setClose] = useState(false)
  const [value, setValue] = useState([]);
  const [stateUpdate, setStateUpdate] = useState()
  const [cost, setCost] = useState();
  

  //   // total cost
  const totalCost = () => {
    const a = value.reduce((accum, curr) => {
      console.log("curr ==>", curr)
      return accum + ( curr.price * curr.quantity );
    }, 0)
    setCost(a)
    setStateUpdate(!stateUpdate)
    }

 // handle add
const handleAdd = (res) => {
  setValue([...value, res]);  
  totalCost();
  setStateUpdate(!stateUpdate)
  }
  
  
//   // handle remove
  const handleRemove = (res) => {
    const a = value.filter((item) => item?.heading !== res?.heading)      
    setValue(a)
  }  


//   // handle add quantity
//   const handleAddQuantity = (res) => {
//     const fIndex = value.findIndex((item) => item?.name === res?.name)
//     value[fIndex].quantity += 1  
//     totalCost()
//     setStateUpdate(!stateUpdate)
//   }


  


   

    


//   // handle decrease quantity
//   const handleRemoveQuantity = (res) => {
//     const fIndex = value.findIndex((item) => item?.name === res?.name)
//     if(value[fIndex].quantity === 1) {
//       const a = value.filter((item) => {
//        return item?.name !== res?.name
//       })
//       setValue(a)
//     } else {
//     value[fIndex].quantity -= 1
//     totalCost()
//     setStateUpdate(!stateUpdate)
//     }
//   }
    
  useEffect(() => {
    totalCost()
  }, [value])

  
  return (
    <div>
      <Navbar value={value} setClose={setClose}/>  
      <div className="cardsSection">

        {list.map((res) => {
       const { heading, paragraph, price, category , image} = res;
        return (
          <div className="cardsSection_card">
              <img src={image} alt="" />
              <h5>{heading}</h5>
              <p>{paragraph}</p>
              <span>Price {price}$</span>
              { value?.some((item) => item?.heading === res?.heading) ? <button onClick={() => handleRemove(res)} >Remove</button> : <button onClick={() => handleAdd(res)}>Add to Cart</button> } 
            </div>
            )
      }) }
         </div>     
      
         {close && <NavSidebar totalCost={totalCost} setCost={setCost} setStateUpdate={setStateUpdate} cost={cost} value={value} setClose={setClose}/> }
    </div>
  )
}

export default CardsSection