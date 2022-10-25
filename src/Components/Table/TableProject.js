import React from 'react'
import { useState, useEffect } from 'react';
import AddProject from '../Popup/AddProject';
import Detail from '../Popup/Detail';
import DeleteProjectPopup from '../Popup/DeleteProjectPopup';
import EditProjectPopup from '../Popup/EditProjectPopup';



const TableTestomonials = () => {
  const [searchVal, setSearchVal] = useState("");
  const [obj, setObj] = useState({})
  const [addProject, setAddProject] = useState(false)
  const [imgPopup, setImgPopup] = useState(false)
  const [close2, setClose2] = useState(false)
  const [editProject , setEditProject] = useState(false)

  const [projectList, setProjectList] = useState([])
  

  return (
      <div>  
      <div className="searchBar">
      <div className="searchBar_inner">
        <div className="searchBar_selector" style={{display : "flex" , justifyContent : "space-between" , width: "100%" }} >
            <button onClick={() => setAddProject(true)}>Add Item</button>
          <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder='Search...' />   
        </div>
            
          </div>
        </div> 

        <div className="tableUsers">
        <table>
          <tr>
          <th>S.no</th>
          <th>Item Image</th>  
          <th>Heading</th>
          <th>Paragraph</th> 
          <th>Price</th>   
          <th>Delete</th>
          <th>View</th>
          <th>Edit Item</th>
          </tr>

          <tr>
          <td>1</td>
          <td> <img src="https://i.stack.imgur.com/tseYw.png" alt="" /> </td>
          <td>Banana</td>
          <td>Bnana is very good for health</td>
          <td>20$</td>
          <td> <button onClick={() => setClose2(true)}>Delete</button> </td>
            
          <td> <button onClick={() => setImgPopup(true)}>View</button> </td>
          <td> <button onClick={() => setEditProject(true)}>Edit</button> </td>
            
            
          </tr>  
        
            
          </table>
        </div>

      {addProject && <AddProject setAddProject={setAddProject} />}  
      {imgPopup && <Detail setImgPopup={setImgPopup} />}
      <DeleteProjectPopup close2={close2} setClose2={setClose2} />
      { editProject && <EditProjectPopup setEditProject={setEditProject}  /> }
        </div>  
);

}

export default TableTestomonials