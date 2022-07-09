import React,{useEffect, useState} from "react";
import {HiOutlinePhotograph} from "react-icons/hi";
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import logo from "../images/logosenzascritta.png"
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";


export default function ModificaProfilo(){

    const navigate = useNavigate();
    const location = useLocation()

    if (location.state == null) {
            
        return <Navigate to="/HomePage"/>
    }

    const [error, setError] = useState("")

    const routeChange = () => {
        let path = "/ProfilePage";
        navigate(path);
    }

    const [formData, setFormData] = useState(
        {
            nome: location.state.nome,
            cognome: location.state.cognome,
            img: location.state.img,
            user_id: location.state.user_id
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
        axios.post("http://localhost:80/Teverola-Times-Journal/modify-profile.php", {
            data: {
                nome: formData.nome,
                cognome: formData.cognome,
                img: formData.img,
                user_id: location.state.user_id
            },
        },{
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
            } 
       })
        .then((response) => {
            setError("Modifica inviata")
            navigate("/ProfilePage")
        })
    }


    return(
        location.state==null ? navigate("/HomePage") : 
        <>
            <div className="hero has-background-warning-light is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">...Modifica il tuo profilo...</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label has-text-black is-size-4 has-text-left">Nome</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input 
                                                    className="input" 
                                                    type="text " 
                                                    placeholder="Inserisci il tuo nuovo nome" 
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
                                        <label className="label has-text-black is-size-4 has-text-left">Cognome</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input 
                                                    className="input" 
                                                    type="text" 
                                                    placeholder="Inserisci il tuo nuovo cognome" 
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
                                        <label className="label has-text-black is-size-4 has-text-left" >Immagine Profilo</label>
                                        <p className="control has-icons-left">
                                            <input 
                                                className="input"
                                                type="text" 
                                                placeholder="Inserisci url immagine di profilo..."
                                                onChange={handleChange}
                                                name="img"
                                                value={formData.img}
                                            />
                                            <span className="icon is-small is-left">
                                                <HiOutlinePhotograph/>
                                            </span>
                                        </p>
                                    </div>

                                    <br></br>
                                    <br></br>
                                    <div className="field ">
                                        <p className="control mgt-large">
                                            <button className="button is-link is-hovered is-rounded is-medium">
                                            Invia Modifiche
                                            </button>
                                        </p>
                                    </div>
                                </form>
                                <br></br>
                                {error}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}