import React from "react";
import {MdAttachEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri"
import {AiOutlineArrowLeft} from "react-icons/ai"
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";

export const LoginPage = () =>{

    const navigate = useNavigate();

    const routeChange = () => {
        let path = "/";
        navigate(path); 
    }
    
    return(
        <>
            <div className="hero is-success is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">LOGIN</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">

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
                                    <p class="control">
                                        <button class="button is-hovered is-rounded is-medium">
                                        Login
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