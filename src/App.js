
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'

import React from 'react';
import ErrorPage from './components/ErrorPage';



function App() {

  const [mode, setmode] = useState("light") // By default dark mode will be turned off
  const [alert, setAlert] = useState(null)

  const showAllert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAllert("Light Mode has been enabled", "success ")
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor ='#254368'
      showAllert("Dark Mode has been enabled", "success")
    }
  }

  

  return (
    <>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
          <TextForm mode={toggleMode}/>
          <About />
    </>
            
  );
}

export default App;