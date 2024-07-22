import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
//import { Alert } from 'bootstrap';
import Alert from './components/Alert';
//import {Switch} from 'react-router-dom';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert=(message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=> {
            setAlert(null);
        },1500);
    }
//
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='#042743';
            showAlert("dark mode has been enabled ","success");
            document.title='TextUtils-Dark mode';
            // setInterval(()=>{
            //     document.title='TextUtils is amaging mode';
            // },2000);                                               // notes- title ko chamkane ke liye use karte hai esse
            // setInterval(()=>{
            //     document.title='Install TextUtils Now';
            // },1500);
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enable ","success");
            document.title='TextUtils-Light mode';
        }
    }
    return (
            <>
          {/* <Navbar title ="TextUtils" about ="About Us"/>*/}
          <Router>
           <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="contsiner my-3">
            
          <Routes>
            {/* /users -->component 1
                /users/home -->component 2  */ }
          <Route exact path="/about" element={<About />} />
          
          < Route exact path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
           </Routes>
          
            </div>
            </Router>
            </>
        
    );
}


export default App;