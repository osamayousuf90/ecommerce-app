import React from 'react'
import { db } from '../../Firebase/firebase'
import { useEffect } from 'react'
import { getDocs , collection } from 'firebase/firestore'
import Navbar from '../../Components/Navbar/Navbar'


const CardsSection = ({list}) => {
  
  return (
    <div>
      <Navbar/>  
      <div className="cardsSection">

          {list.map((res) => {
       const { heading, paragraph, price, category } = res;

        return (
          <div className="cardsSection_card">
              <img src="https://fresh-city.co/wp-content/uploads/2020/04/Best-Iranian-Apple-From-fresh-city-1024x684.jpg" alt="" />
              <h5>{heading}</h5>
              <p>{paragraph}</p>

              <span>Price {price}$</span>
              <button>Add to Cart</button>
            </div>
            )
      }) }
         </div>     
     
       
    </div>
  )
}

export default CardsSection