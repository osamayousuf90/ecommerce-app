import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CardsSection from '../../Components/CardsSection/CardsSection'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { ref } from 'firebase/storage'

const MainPage = () => {
  const [value, setValue] = useState([]);
  const [cost, setCost] = useState();
  const [stateUpdate, setStateUpdate] = useState()

 
//     // handle add
const handleAdd = (res) => {
  setValue([...value, res]);  
  totalCost();
  setStateUpdate(!stateUpdate)
}
  
//   // handle remove
//   const handleRemove = (res) => {
//     const a = value.filter((item) => item?.name !== res?.name)      
//     setValue(a)
//   }  


//   // handle add quantity
//   const handleAddQuantity = (res) => {
//     const fIndex = value.findIndex((item) => item?.name === res?.name)
//     value[fIndex].quantity += 1  
//     totalCost()
//     setStateUpdate(!stateUpdate)
//   }


  
//   // total cost
  const totalCost = () => {
    const a = value.reduce((accum, curr) => {
      return accum + ( curr.price * curr.quantity );
    }, 0)
    setCost(a)
    setStateUpdate(!stateUpdate)
  }



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



//   useEffect(() => {
//    totalCost()
//   }, [value])

     
  return (
    <div>
       <Navbar/>  
       <CardsSection/>   
    </div>
  )
}

export default MainPage