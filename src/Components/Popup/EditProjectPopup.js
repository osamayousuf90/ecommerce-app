import React from "react";
import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { collection } from "firebase/firestore";
import { ref } from "firebase/storage";
import { storage } from "../../Firebase/firebase";

const EditProjectPopup = ({ setEditProject, obj , gettingList}) => {
  const [inputImage, setInputImage] = useState();
  const [viewImage, setViewImg] = useState(obj?.image);
  const [state, setState] = useState({ heading: "", paragraph: "", price: "" , image : "" });
  


  // handle value changes
  const handleValueChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // handle update
  const handleUpdate = () => {
    const { heading, paragraph, price } = state;
    const docRef = doc(db, "products", obj?.id);


    const storageRef = ref(storage, `product-image/${Date.now()}`);
    // Create a child reference
    const imageRef = storageRef.child(`images/${imageFile.name}`);

    
    updateDoc(docRef, {
      "heading": heading,
      "paragraph" : paragraph,
      "price": price,
      "image" : inputImage
    })
     
      
      
      .then(() => {
        gettingList()
        alert("Updated Succesfully");
        setEditProject(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setState({
      heading: obj?.heading,
      paragraph: obj?.paragraph,
      price: obj?.price,
      image : obj?.image
    });
  }, []);

  return (
    <div>
      <div className="addProject">
        <div className="addProject_inner">
          <i
            onClick={() => setEditProject(false)}
            class="fa-solid fa-xmark"
          ></i>
          <p>UPDATE ITEM</p>

          <div className="addProject_fields">
            <div className="addProject_labelInput">
              <label>Add Heading</label>
              <input
                onChange={(e) => handleValueChange(e)}
                name="heading"
                value={state?.heading}
                type="text"
                placeholder="Heading..."
              />
            </div>

            <div className="addProject_labelInput">
              <label>Add Paragraph</label>
              <textarea
                onChange={(e) => handleValueChange(e)}
                name="paragraph"
                value={state?.paragraph}
                placeholder="Paragraph..."
              ></textarea>
            </div>

            <div className="addProject_labelInput">
              <label>Add Price</label>
              <input
                name="price"
                value={state?.price}
                type="number"
                onChange={(e) => handleValueChange(e)}
                placeholder="Price..."
              />
            </div>

            <div className="addProject_updload">
              <label>Upload Image</label>
              <div className="addProject_uploadedImg">
                <img
                  src={inputImage ? viewImage : obj?.image}
                  width="200px"
                  alt="No Image Found"
                />
              </div>
              <input
                type="file"
                onChange={(e) => {
                  setViewImg(URL.createObjectURL(e.target.files[0]));
                  setInputImage(e.target.files[0]);
                }}
              />
            </div>

            <br />
            <br />

            <button onClick={() => handleUpdate()}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjectPopup;
