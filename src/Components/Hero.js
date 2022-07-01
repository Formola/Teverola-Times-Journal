import React from "react";
import gif from "../images/hero.gif";
import "./Hero.css"
import {GiNewspaper } from "react-icons/gi";
import {FaPenAlt} from "react-icons/fa";
import {BsCashCoin,BsPencilSquare} from "react-icons/bs";

export default function Hero(){
    return(
        <>
            <div className="Hero">
                <div>
                    <span className="hero--papericon">
                        <GiNewspaper/>
                    </span>
                    <p className="text1">Benvenuto su Teverola Times Journal!</p>
                    <br></br>
                    <p className="text2"> Su questo quotidiano online potrai leggere articoli di ogni tipo in base ai tuoi argomenti preferiti!</p>
                </div>

                <div>
                    <span className="hero--pencil">
                        <FaPenAlt/>
                    </span>
                    <p className="text3">Registrati come Giornalista per pubblicare!</p>
                    <br></br>
                    <p className="text4">Se sei un Giornalista registrati come tale per iniziare a pubblicare su Teverola Times Journal!!</p>
                </div>
                
                <div>
                        <img src={gif} alt="hero" className="hero--gif"/>
                </div>

            </div>

            <div className="hero--buttons">
                <button class="button is-danger is-rounded">Abbonati per 0,99€ al mese! 
                    <span className="cash-icon">
                        <BsCashCoin/>
                    </span>
                </button>
                <button class="button is-success is-rounded">Se sei un nostro Giornalista registrati<br></br> e inizia a pubblicare!<br></br>
                    <span className="write-icon">
                        <BsPencilSquare/>
                    </span>
                </button>

            </div>



        </>
    )
}