
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import './App.css';
import Appbar from './Appbar'
import Error from './Error';
import Home from './Home';
import Login from './Login';
// import { SignUp } from './Signup';
import SignUp from './Signup';
import User from './User';

function App() {
  
  const [currentForm , setcurrentForm] = useState('home')
  // console.log(!isLogin);

  const toggleForm = (formName) =>{
    setcurrentForm(formName);
  }

  return (
    <div className="App">
      <Appbar onLinkClick = {toggleForm} />
      {
        currentForm === "home" && <Home /> 
      }
      {
        currentForm === "login" && <Login onLinkClick = {toggleForm} />
      }
      {
        currentForm === "signup" && <SignUp  onLinkClick = {toggleForm}/>
      }

      {
        currentForm === "admin" && <Admin />
      }
      {
        currentForm === "user" && <User />
      }
      
    </div>
  );
}

export default App;
