import React,{useState,useContext} from "react";
import "./SignUpPage.css";
import {MdAttachEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import gif from "../images/signup.gif"
import gif2 from "../images/saldangtribute.gif"
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import { UserContext } from "./UserContexts";
import { Navigate } from "react-router-dom";

export const SignUpPage = () =>{

    const navigate = useNavigate();
    const [error, setError] = useState("")
    const {user,setUser} = useContext(UserContext) 

    const routeChange = () => {
        let path = "/";
        navigate(path);
    }

    const [formData, setFormData] = useState(
        {
            nome: "",
            cognome: "",
            email: "",
            password: "",
        }
    )

    function handleChange(event){
        const {name,value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:80/Teverola-Times-Journal/sign-up.php", { 
            data: {
                nome: formData.nome,
                cognome: formData.cognome,
                email: formData.email,
                password: md5(formData.password)
            },
        },{
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            } 
       })
        .then((response) => {
            setError(response.data)
        })
        .catch((error) => {
            if (error.response) {
              if(error.response.status === 0 ){
                  setError("Controlla la connessione ad internet")
              }
              
            }
          })
    }

    return(
        user ? <Navigate  to="/HomePage"/> :
        <>
            <div className="hero is-info is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">REGISTRATI</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <img src={gif} alt="signupgif" className="signup--gif"/>
                    <img src={gif2} alt="signupgi2" className="signup--gif2"/>
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left">Nome</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input 
                                                    className="input" 
                                                    type="text " 
                                                    placeholder="Inserisci il tuo nome" 
                                                    maxLength="20" 
                                                    required
                                                    onChange={handleChange}
                                                    name="nome"
                                                    value={formData.nome}
                                                />
                                                <span className="icon is-small is-left">
                                                <BsFillPersonFill/>
                                                </span>
                                            </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left">Cognome</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input 
                                                    className="input" 
                                                    type="text" 
                                                    placeholder="Inserisci il tuo cognome" 
                                                    maxLength="20"
                                                    required
                                                    onChange={handleChange}
                                                    name="cognome"
                                                    value={formData.cognome}
                                                />
                                                <span className="icon is-small is-left">
                                                <BsFillPersonFill/>
                                                </span>
                                            </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Email</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input 
                                                className="input"
                                                type="email"
                                                placeholder="Email"
                                                maxLength="30"
                                                required
                                                onChange={handleChange}
                                                name="email"
                                                value={formData.email}
                                            />
                                            <span className="icon is-small is-left">
                                            <MdAttachEmail/>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Password</label>
                                        <p className="control has-icons-left">
                                            <input 
                                                className="input"
                                                type="password" 
                                                placeholder="Password"
                                                required
                                                onChange={handleChange}
                                                name="password"
                                                value={formData.password}
                                            />
                                            <span className="icon is-small is-left">
                                            <RiLockPasswordFill/>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="field ">
                                        <p className="control mgt-large">
                                            <button className="button is-hovered is-rounded is-medium">
                                            Registrati
                                            </button>
                                        </p>
                                    </div>
                                </form>
                                <br></br>
                                {error}
                                {error === "Registrazione avvenuta con successo" ? (navigate("/"),alert(error)) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}