import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Main from'./Components/Main';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,100,0,-25" />
    <Navbar/>
    <Main/>
    </>
  );
}

export default App;
