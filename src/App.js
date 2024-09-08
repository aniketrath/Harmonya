import './App.css';
import React from "react";
import { Navigation } from './Components/Navigation'
import {
HashRouter as Router,
Routes,
Route,
}
  from "react-router-dom";
import { Homepage } from './Pages/Homepage';
import { UserDetails } from './Pages/UserDetails';
import { Error } from './Pages/Error';
import { Login } from './Pages/Login'
import { CompanySignUp } from './Pages/CompanySignUp'


function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/User_Details" element={<UserDetails />} />
        <Route path="*" element={<Error />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<CompanySignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
