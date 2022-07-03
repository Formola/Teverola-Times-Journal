import React from "react";
import "./SignUpPage.css";
import {MdAttachEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import gif from "../images/signup.gif"
import gif2 from "../images/saldangtribute.gif"
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";

export const SignUpPage = () =>{

    const navigate = useNavigate();

    const routeChange = () => {
        let path = "/";
        navigate(path);
    }

    return(
        <>
            <div className="hero is-info is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">REGISTRATI</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <img src={gif} alt="signupgif" className="signup--gif"/>
                    <img src={gif2} alt2="signupgi2" className="signup--gif2"/>
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">
                                <div class="field">
                                    <label class="label has-text-white is-size-4 has-text-left">Nome</label>
                                        <p class="control has-icons-left has-icons-right">
                                            <input class="input" type="text " placeholder="Inserisci il tuo nome" maxlength="20" required/>
                                            <span class="icon is-small is-left">
                                            <BsFillPersonFill/>
                                            </span>
                                        </p>
                                </div>

                                <div class="field">
                                    <label class="label has-text-white is-size-4 has-text-left">Cognome</label>
                                        <p class="control has-icons-left has-icons-right">
                                            <input class="input" type="text " placeholder="Inserisci il tuo cognome" maxlength="20" required/>
                                            <span class="icon is-small is-left">
                                            <BsFillPersonFill/>
                                            </span>
                                        </p>
                                </div>

                                <div class="field">
                                    <label class="label has-text-white is-size-4 has-text-left" >Email</label>
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" placeholder="Email" maxlength="30" required/>
                                        <span class="icon is-small is-left">
                                        <MdAttachEmail/>
                                        </span>
                                    </p>
                                </div>

                                <div class="field">
                                    <label class="label has-text-white is-size-4 has-text-left" >Password</label>
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" placeholder="Password" required/>
                                        <span class="icon is-small is-left">
                                        <RiLockPasswordFill/>
                                        </span>
                                    </p>
                                </div>

                                <div class="field">
                                    <label class="label has-text-white is-size-4 has-text-left">Telefono</label>
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="text" placeholder="Inserisci il tuo numero di telefono" maxlength="10"/>
                                        <span class="icon is-small is-left">
                                        <BsFillTelephoneFill/>
                                        </span>
                                    </p>
                                </div>


                                <div class="field">
                                    <p class="control">
                                        <button class="button is-hovered is-rounded is-medium">
                                        Registrati
                                        </button>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}