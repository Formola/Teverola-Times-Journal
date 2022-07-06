import React,{useContext} from "react";
import Navbar from '../Components/Navbar';
import {Hero} from "../Components/Hero";
import { UserContext } from "./UserContexts";
import { Navigate } from "react-router-dom";

export const StartedPage = () => {

  const {user} = useContext(UserContext)

    return(
        user ? <Navigate to="/HomePage"/> : 
        <>
          <div>
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </>
    )
};