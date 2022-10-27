import React from 'react'
import CardsSection from '../../Components/CardsSection/CardsSection'
import { useState, useEffect } from 'react'
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore'
import { ref } from 'firebase/storage'
import { db } from '../../Firebase/firebase'
import NavSidebar from '../../Components/NavSidebar/NavSidebar'

const MainPage = () => {
  const [value, setValue] = useState([]);
  const [cost, setCost] = useState();
  const [stateUpdate, setStateUpdate] = useState()
  const [list, setList] = useState([])
  const [close , setClose] = useState(true)


  

 
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
  
  

  // getting object
  const gettingList = async () => {
    const productArray = [];

    getDocs(collection(db, "products")).then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        productArray.push({ ...doc.data(), id: doc.id })
      })
      setList(productArray)
    })

}

  useEffect(() => {
  gettingList()
   totalCost()
  }, [value])

  return (

    <div>
      <CardsSection list={list} />  
      { close && <NavSidebar/> }
    </div>

  )
}

export default MainPage