import './App.css';
import React from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {StartedPage} from "./StartedPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartedPage/>} />

      </Routes>


    </Router>

  );
}

export default App;
