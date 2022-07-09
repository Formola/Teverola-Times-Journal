import React from "react";
import gif from "../images/hero.gif";
import "./Hero.css"
import {GiNewspaper } from "react-icons/gi";
import {FaPenAlt} from "react-icons/fa";
import {BsCashCoin,BsPencilSquare} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {GrLogin} from "react-icons/gr"

export const Hero = () => {

    const navigate = useNavigate();

    const routeChange_signup = () => {
        let signup_path = "/SignUp";
        navigate(signup_path, {replace: true});
    }

    const routeChange_login = () =>{
        let login_path = "/Login";
        navigate(login_path, {replace: true});
    }

    
    return(
        <>
            <div className="Hero">
                <div>
                    <span className="hero--papericon">
                        <GiNewspaper/>
                    </span>
                    <p className="text1">Benvenuto su Teverola Times Journal!</p>
                    <br></br>
                    <p className="text2">Abbonati su questo quotidiano online e potrai leggere articoli di ogni tipo in base ai tuoi argomenti preferiti!</p>
                </div>

                <div>
                    <span className="hero--pencil">
                        <FaPenAlt/>
                    </span>
                    <p className="text3">I Giornalisti possono pubblicare!!</p>
                    <br></br>
                    <p className="text4">Se sei un nostro Giornalista registrati per iniziare a pubblicare su Teverola Times Journal!!</p>
                </div>
                
                <div>
                        <img src={gif} alt="hero" className="hero--gif"/>
                </div>

            </div>

            <div className="hero--buttons">
                <button className="button is-danger is-rounded" onClick={routeChange_signup}>Abbonati! 
                    <span className="cash-icon">
                        <BsCashCoin/>
                    </span>
                </button>

                
                <button className="button is-success is-rounded"  onClick={routeChange_signup}>Sei un Giornalista? Registrati<br></br> e inizia a pubblicare!<br></br>
                    <span className="write-icon">
                        <BsPencilSquare/>
                    </span>
                </button>

                <button className="button is-info is-rounded"  onClick={routeChange_login}>Effettua il Login!!<br></br>
                    <span className="login-icon">
                        <GrLogin/>
                    </span>
                </button>

            </div>
        </>
    )
}
