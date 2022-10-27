import React from "react";
import { useState } from "react";
import { collection, getDocs , addDoc , query , where} from "firebase/firestore"
import { auth , db , storage } from "../../Firebase/firebase"
import { getDownloadURL , ref , uploadBytes } from "firebase/storage";


const AddProject = ({ setAddProject }) => {

  const [image, setImage] = useState("")
  const [state, setState] = useState({ "heading": "", "paragraph": "", "price": 0, "category": "" })
  const [category , setCategory] = useState("")

  const [viewImage, setViewImg] = useState()
  

  // handle value changes
  const handleValueChange = (e) => {
    setState({...state , [e?.target?.name] : e?.target?.value})
  }

  
  //  handle add product  
  const handleAddProduct = (e) => {
    const { heading, paragraph, price } = state;
    e.preventDefault();
    const storageRef = ref(storage, `product-image/${Date.now()}`);

    uploadBytes(storageRef, image).then(() => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, "products"), {
          heading,
          paragraph,
          price,
          image: url, 
          category,
          quantity : 0
        })
        alert("Added Succsfully");
      }).catch(() => {
        console.log("ERROR")
      })
    })
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

            
            <div className="addProject_selector">
            <label>Add Category</label>
             <select onChange={(e) => setCategory(e.target.value)}>
             <option value="Selecte Category" selected disabled>Select Category</option>    
             <option value="Fruit">Fruit</option>
             <option value="Electronic">Electronic</option>
             <option value="Fashion">Fashion</option>
             </select>
             </div>


            <div className="addProject_labelInput" >   
            <label>Add Price</label>                            
            <input name="price" type="number" onChange={(e) => handleValueChange(e)} placeholder="Price..."/>    
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
           
              <button onClick={(e) => handleAddProduct(e)}>Add Project</button>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
