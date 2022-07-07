import React,{useState} from "react";
import {HiOutlinePhotograph} from "react-icons/hi";
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ChangeUserForm = () =>{

    const navigate = useNavigate();
    const [error, setError] = useState("")

    const routeChange = () => {
        let path = "/HomePage";
        navigate(path);
    }

    const [formData, setFormData] = useState(
        {
            nome: "",
            cognome: "",
            img: "",
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
        console.log(formData)
        axios.post("http://localhost:80/Teverola-Times-Journal/index.php", {
            type: "user-signup",
            data: {
                nome: formData.nome,
                cognome: formData.cognome,
                email: formData.email,
            },
        },{
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
            } 
       })
        .then((response) => {
            console.log(response)
        })
    }

    return(
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
                                                required
                                                onChange={handleChange}
                                                name="img"
                                                value={formData.password}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}