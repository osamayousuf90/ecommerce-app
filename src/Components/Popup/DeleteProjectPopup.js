import React, { useRef, useEffect } from 'react'
import { useState } from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase';


const DeleteProjectPopup = ({setClose2 , close2 , obj , gettingList}) => {

  const rejectRef = useRef()  
    
  const clickOutSide = (e) => {
    if (!rejectRef?.current?.contains(e.target)) {
      setClose2(false)
    }
  }

  // handle delete
  const handleDelete = () => {
    const docRef = doc(db, "products", obj?.id);

    deleteDoc(docRef)
    .then(() => {
      alert("Deleted Succesfully")
      setClose2(false)
      gettingList()
    })
    .catch(error => {
        console.log(error);
    })
  }   




  useEffect(() => {
    document.addEventListener("click", clickOutSide , true)
  }, [])
  return (
    <div className={close2 === true ? "rejectPopup rejectPopup_active" : "rejectPopup rejectPopup_inactive"}>
    <div ref={rejectRef} onClick={(e) => clickOutSide(e)} className="rejectPopup_inner">
    <i onClick={() => setClose2(false)} class="fa-solid fa-xmark"></i>
      <h5>Are You Sure You Want To Delete This Project?</h5>
      <div className="rejectPopup_btns">
        <button onClick={handleDelete}><i class="fa-solid fa-trash-can"></i> Delete</button>
        <button onClick={() => setClose2(false)}>Cancel</button>
      </div>
    </div> 
   </div>
  )
}

export default DeleteProjectPopup