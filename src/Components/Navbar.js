import React from "react"
import logo from "../images/logo.png"
import {Link} from "react-router-dom";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();

    const routeChange_signup = () => {
        let signup_path = "/SignUp";
        navigate(signup_path);
    }

    const routeChange_login = () =>{
        let login_path = "/Login";
        navigate(login_path);
    }

    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-start">
                    <img src={logo} className="nav--logo" alt="logo"></img>
                </Link>
            </div>
            <div className="navbar-item">
                    <h1 className="nav--title">TEVEROLA TIMES JOURNAL</h1>
            </div>
            <div className="navbar-item is-justify-content-space-between">
                    <button className="button is-primary is-rounded is-normal" onClick={routeChange_signup}>Registrati</button>
                    <button className="button is-primary is-rounded  is-normal" onClick={routeChange_login}>Login</button>
                
            </div>
        </nav>
    )
}