import React from "react";
import { useState } from "react";



const AddProject = ({ setAddProject }) => {

  const [logo, setLogo] = useState()
  const [image, setImage] = useState()
  const [state, setState] = useState({ "heading": "", "paragraph": "" })

  const [viewImage, setViewImg] = useState()
  const [viewLogo, setViewLogo] = useState()
  

  // handle value changes
  const handleValueChange = (e) => {
    setState({...state , [e.target.name] : e.target.value})
  }

    
  return (
    <div>
      <div className="addProject">
        <div className="addProject_inner">
        <i onClick={() => setAddProject(false)} class="fa-solid fa-xmark"></i>          
          <p>ADD PROJECT</p>

            <div className="addProject_fields">
  
            <div className="addProject_labelInput" >
            <label>Add Heading</label>              
            <input name="heading" onChange={(e) => handleValueChange(e)} type="text" placeholder="Heading..." />  
            </div>       


            <div className="addProject_labelInput" >   
            <label>Add Paragraph</label>                            
              <textarea name="paragraph" onChange={(e) => handleValueChange(e)} placeholder="Paragraph..."></textarea>    
            </div>


            <div className="addProject_updload">
            <label>Upload Logo</label> 
            {viewLogo && (
            <div className="addProject_uploadedImg">
            <img src={viewLogo} width="100px" alt="No Image Found" />
            </div>
            )}
              <input type="file" onChange={(e) => { setLogo(e.target.files[0]); setViewLogo(URL.createObjectURL(e.target.files[0])) }} />
            </div>

            <div className="addProject_updload"> 
            <label>Upload Image</label>
            {viewImage && (
            <div className="addProject_uploadedImg">
            <img src={viewImage} width="200px" alt="No Image Found" />
            </div>
            )} 
            <input type="file" onChange={(e) => { setImage(e.target.files[0]); setViewImg(URL.createObjectURL(e.target.files[0])) }} />
            </div>
           
              <button>Add Project</button>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
