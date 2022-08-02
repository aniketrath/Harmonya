import logo from './logo.svg';
import './App.css';
import React from "react";
import 
{
  BrowserRouter as Router,
  Routes,
  Route,
} 
  from "react-router-dom";
import { Homepage } from './Pages/Homepage';
import { Login } from './Pages/Login';
import { UserDetails } from './Pages/UserDetails';
import { Error } from './Pages/Error';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/User_Details" element={<UserDetails/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
   </Router>
  );
}

export default App;
