import './Assets/App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import API from './API/API';
import { useState , useEffect } from 'react';

function App() {
  const [value, setValue] = useState([])
  
  // handle add to list
  const handleAdd = (res) => {
    setValue([...value, res]);
  }






  
  console.log("value list---->", value)
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter> */}
      
      {API?.map((res) => {
        return (
          <>
            <div style={{display : "flex", flexDirection: "row"}}>
              <h2>{res?.name} {res?.price} </h2>
               
              <button onClick={() => { handleAdd(res) }}> Add To Cart </button>
            </div>
          </>
        )
      })}

      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Cart List</h2>
    
      {value.map((res) => {
        return (
          <>
            <p>{res?.name}{res?.price}</p>  
          </>
         )
       }) } 

    </>
  );
}

export default App;
