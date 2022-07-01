import React from "react"
import logo from "../images/logo.png"
import "./navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-start">
                    <img src={logo} className="nav--logo" alt="logo"></img>
                </a>
            </div>
            <div className="navbar-item">
                
                    <h1 className="nav--title">TEVEROLA TIMES JOURNAL</h1>
                
            </div>
            <div className="navbar-end">
                <a className="navbar-item">
                    <button class="button is-primary is-rounded">Registrati</button>
                </a>
                <a className="navbar-item">
                    <button class="button is-primary is-rounded">Login</button>
                </a>
            </div>
        </nav>
    )
}