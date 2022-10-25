import React from 'react'
import { useState } from "react";



const EditProjectPopup = ({setEditProject , obj , gettingProjectList}) => {
  const [inputLogo, setInputLogo] = useState()
  const [inputImage, setInputImage] = useState()

  // for viewing
  const [viewLogo, setViewLogo] = useState(obj?.logo)
  const [viewImage, setViewImg] = useState(obj?.image)
  

  // handle value changes
  const handleValueChange = (e) => {
    setState({...state , [e.target.name] : e.target.value})
  }


  const [state, setState] = useState({ "heading": obj?.heading, "paragraph": obj?.peragraph })


  return (
    <div>
      <div className="addProject">
        <div className="addProject_inner">
        <i onClick={() => setEditProject(false)} class="fa-solid fa-xmark"></i>          
          <p>UPDATE PROJECT</p>

            <div className="addProject_fields">
  
            <div className="addProject_labelInput" >
            <label>Add Heading</label>              
            <input onChange={(e) => handleValueChange(e)} name="heading" value={state?.heading} type="text" placeholder="Heading..." />  
            </div>       


            <div className="addProject_labelInput" >   
            <label>Add Paragraph</label>                            
            <textarea onChange={(e) => handleValueChange(e)} name="paragraph" value={state?.paragraph} placeholder="Paragraph..."></textarea>    
            </div>

          <div className="addProject_updload">
            <label>Upload Logo</label>
            <div className="addProject_uploadedImg">
            <img src={ inputLogo ? viewLogo : `https://linkitsoft.com/LIS/${viewLogo}`} width="100px" alt="No Image Found" />
            </div>
              <input type="file" onChange={(e) => { setViewLogo(URL.createObjectURL(e.target.files[0])); setInputLogo(e.target.files[0]) }} />
            </div>

            <div className="addProject_updload">
            <label>Upload Image</label>
            <div className="addProject_uploadedImg">
            <img src={ inputImage ? viewImage : `https://linkitsoft.com/LIS/${viewImage}`} width="200px" alt="No Image Found" />
            </div>
              <input type="file" onChange={(e) => { setViewImg(URL.createObjectURL(e.target.files[0]));  setInputImage(e.target.files[0]) }} />
            </div>
              <button>Update</button>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProjectPopup