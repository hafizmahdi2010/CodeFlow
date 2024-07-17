import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Editior from './Editior/Editior';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import "./css/mobile.css"
import "./css/tablet.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/codeFlowEditior/:projectID' element={<Editior />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singUp' element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App