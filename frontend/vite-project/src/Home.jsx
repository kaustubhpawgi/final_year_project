import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/SGSITS_Indore.png'
import './App.css'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
    <div className='gradient_background'>
    <div>
      <img src={logo} alt="logo"/>
    </div>
    <div>
      <h1>Welcome to mentor mentee portal!</h1>
      <ul>
      {/* <Button variant="secondary" ><a href="/hod">Secondary</a></Button>{' '} */}
      <Button variant="secondary" ><a href="/login">Login</a></Button>{' '}
      <Button variant="secondary" ><a href="/register">Register</a></Button>{' '}
      </ul>
    </div>
    </div>
    </>
  );
}

export default Home;