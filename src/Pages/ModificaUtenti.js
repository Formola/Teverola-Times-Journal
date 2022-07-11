import React,{useState} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import logo from "../images/logosenzascritta.png"
import { FaEuroSign } from "react-icons/fa";

export default function ModificaUtenti(){

    const location = useLocation()
    const navigate = useNavigate();

    if (location.state == null) {
        return <Navigate to="/HomePage"/>
    }

    const routeChange = () => {
        let path = "/Gestioneutenti";
        navigate(path);
    }

    const [formData, setFormData] = useState(
        {
            nome: location.state.nome,
            cognome: location.state.cognome,
            ruolo: location.state.user_type,
            stipendio: location.state.salary,
        }
    )

    const [user,setUser] = useState({
        nome: location.state.nome,
        cognome: location.state.cognome,
        ruolo: location.state.user_type,
        stipendio: location.state.salary,
    })


    function handleChange(event){
        const {name,value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    let funcional_change_label 
    let funcional_change_input

    if(formData.ruolo === "GIORNALISTA"){
        funcional_change_label = (
            <>
                <label className="label has-text-black is-size-4 has-text-left">Nome attuale : {user.nome}</label>
                <label className="label has-text-black is-size-4 has-text-left">Cognome attuale : {user.cognome}</label>
                <label className="label has-text-black is-size-4 has-text-left">Stipendio attuale : {user.stipendio}</label>
                <label className="label has-text-black is-size-4 has-text-left">Ruolo attuale : {user.ruolo}</label>
            </>
        )
        funcional_change_input = (
            <>
                <div className="field">
                    <label className="label has-text-black is-size-4 has-text-left" >Stipendio</label>
                    <p className="control has-icons-left">
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Inserisci nuovo Stipendio"
                            onChange={handleChange}
                            name="stipendio"
                            value={formData.stipendio}
                        />
                        <span className="icon is-small is-left">
                            <FaEuroSign/>
                        </span>
                    </p>
                </div>
            </>
            
        )
    } else {
        funcional_change_label = (
            <>
                <label className="label has-text-black is-size-4 has-text-left">Ruolo attuale : {user.ruolo}</label>
                <label className="label has-text-black is-size-4 has-text-left">Nome attuale : {user.nome}</label>
                <label className="label has-text-black is-size-4 has-text-left">Cognome attuale : {user.cognome}</label>
            </>
        )
    }

    const [message,SetMessage] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:80/Teverola-Times-Journal/users-management.php",{
            data: {
                nome: formData.nome,
                cognome : formData.cognome,
                ruolo: formData.ruolo,
                stipendio: formData.stipendio,
                id_user : location.state.user_id
            },
        }, {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            } 
       })
       .then((response) => {
            setUser(formData)
            SetMessage("Modifiche Effettuate")
            navigate("/GestioneUtenti")
       })
    }


    return(

        <>
            <div className="hero has-background-warning-light is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">..Stai modificando il profilo di {user.nome} {user.cognome}...</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">

                                {funcional_change_label}

                                <br></br>
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

                                    {funcional_change_input}

                                    <br></br>
                                    <div className="field">
                                        <label className="label has-text-black is-size-4 has-text-center" >Ruolo</label>
                                        <div className="select">
                                            <select onChange={handleChange} name="ruolo">
                                                <option>Default: {location.state.user_type}</option>
                                                <option value="UTENTE">UTENTE</option>
                                                <option value="GIORNALISTA">GIORNALISTA</option>
                                                <option value="ADMIN">ADMIN</option>
                                            </select>
                                        </div>
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
                                <br></br>
                                {message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}