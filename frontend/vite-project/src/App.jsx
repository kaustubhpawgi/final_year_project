import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login"
import Register from "./Register"

function App() {
  return (
    <>
        <div>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
    </>
  )
}      

export default App
