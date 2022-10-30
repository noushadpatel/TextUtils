
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'

import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
        <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
            <Routes>
              <Route path='/' element={<TextForm mode={toggleMode}/>} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={ErrorPage}/>
            </Routes>
        </Router>
  );
}

export default App;