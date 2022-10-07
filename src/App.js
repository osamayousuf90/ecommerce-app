import './Assets/App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import API from './API/API';
import { useState , useEffect } from 'react';

function App() {
  const [value, setValue] = useState([]);
  const [cost, setCost] = useState();
  const [stateUpdate, setStateUpdate] = useState()

 
    // handle add
const handleAdd = (res) => {
  setValue([...value, res]);  
}
  
  // handle remove
  const handleRemove = (res) => {
    const a = value.filter((item) => item?.name !== res?.name)      
    setValue(a)
  }  


  // handle add quantity
  const handleAddQuantity = (res) => {
    setStateUpdate(!stateUpdate)
    const fIndex = value.findIndex((item) => item?.name === res?.name)
    var quantity = value[fIndex].quantity += 1  
    var price = res?.price * quantity  
  }


  
  // total cost
  const totalCost = (res) => {
    setStateUpdate(!stateUpdate)
    const a = value.reduce((accum, curr) => {
    return accum + curr.price * curr.quantity
    }, 0)
    setCost(a)
  }



  // handle decrease quantity
  const handleRemoveQuantity = (res) => {
    setStateUpdate(!stateUpdate)
    const fIndex = value.findIndex((item) => item?.name === res?.name)
    if(value[fIndex].quantity === 1) {
      return false
    } else {
    var quantity = value[fIndex].quantity -= 1          
    var price = res?.price * quantity  
    }
  }



  // useEffect(() => {
  //  totalCost()
  // }, [value])




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
              <h2>{res?.name} {res?.price} </h2> { value.some((item) => item?.name === res?.name) ? <button onClick={() => handleRemove(res)}>Remove</button> : <button onClick={() => { handleAdd(res)}}>Add To Cart</button> }   
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
            <p style={{ display: "flex" }}>{res?.name} {res?.price}$ <button onClick={() => { handleAddQuantity(res); totalCost(res);  }}>+</button> <p>   {res?.quantity}</p> <button onClick={() => { handleRemoveQuantity(res);  totalCost(res)  }}>-</button> </p>  
          </>
         )
      })} 
      
      <br /><br />
      <h2>Total Cost</h2>
      <p>{cost}</p>
    </>
  );
}

export default App;
