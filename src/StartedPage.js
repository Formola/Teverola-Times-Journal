import React from "react";
import {Link} from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";


export const StartedPage = () => {
    return(
        <>
          <div>
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </>
    )
};