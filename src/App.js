// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
 
// import About from './components/About';
 

// import { BrowserRouter, Routes, Route } from "react-router-dom";


// adding react router dom imports here
 
 

function App() {
  const[darkMode,setdarkMode]=useState('light'); //whether dark mode is enabled or not
  const enableDarkmode=()=>{
    if(darkMode==='light')
    {
      setdarkMode('dark')
    document.body.style.backgroundColor='#042743';
    }
    
    else
    {
      setdarkMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
     
    <>
    
    {/* <BrowserRouter> */}
      
    <Navbar name="Home" mode={darkMode} dark={enableDarkmode} />
    <Textform heading="Enter the text to analyze below " mode={darkMode} />
      {/* <Textform heading="Enter the text to analyze below " mode={darkMode} /> */}
      {/* <Routes>
        
        <Route path="/" element={<Textform heading="Enter the text to analyze below " mode={darkMode} />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    {/* </BrowserRouter> */}
  </>
     
     
  );
}

export default App;
