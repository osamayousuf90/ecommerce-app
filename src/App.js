import './Assets/App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './Pages/SignUp&SingIn/SignUp';
import API from './API/API';
import { useState , useEffect } from 'react';
import SignIn from './Pages/SignUp&SingIn/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import MainPage from './Pages/MainPage/MainPage';
import ViewCardInfoPage from './Pages/ViewCardInfoPage/ViewCardInfoPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signIn" element={<SignIn />} ></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path='/welcome' element={<MainPage />} ></Route>
          <Route path='/productView/:heading/:paragraph/:id/:price' element={<ViewCardInfoPage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
