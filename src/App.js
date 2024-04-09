
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';
import React, {  useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  // State variable that tells whether dark mode is enalbled or not
  const [mode ,setMode] = useState('light'); 
  const [alert,setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode is enalbled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode is enalbled","success");
    }
  }
  
  const showAlert =(message,type)=>{
     setAlert({
        msg:message,
        type:type
     })
     setTimeout(() => {
      setAlert(null);
     }, 2000);
  }


  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode ={toggleMode}/> 
      <Alert alert={alert}/>
     
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>  
            <Route exact path="/" >
            <Textform showAlert={showAlert} heading =" Try TextUtils - Word Counter | Character Counter | Uppercase to Lowercase |Lowercase to Uppercase" mode={mode} />   
            </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;