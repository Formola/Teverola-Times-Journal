import './App.css';
import React from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {StartedPage} from "./Pages/StartedPage"
import { SignUpPage } from './Pages/SignUpPage';
import { LoginPage } from './Pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartedPage/>} />
        <Route exact path="/SignUp" element={<SignUpPage/>} />
        <Route exact path="/Login" element={<LoginPage/>} />

      </Routes>


    </Router>

  );
}

export default App;
