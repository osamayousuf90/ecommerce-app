import React from 'react'
import CardsSection from '../../Components/CardsSection/CardsSection'
import { useState, useEffect } from 'react'
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore'
import { ref } from 'firebase/storage'
import { db } from '../../Firebase/firebase'

const MainPage = () => {
  const [list, setList] = useState([])
  

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
  }, [])

  return (
    <div>
      <CardsSection list={list} />  
    </div>
  )
}

export default MainPage