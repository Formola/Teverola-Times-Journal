import React, { useEffect,useState,useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import logo from "../images/logosenzascritta.png"
import "./ArticlePage.css"
import axios from "axios"
import { UserContext } from "./UserContexts";

export default function ArticlePage(){

    const location = useLocation()
    const [journalists, setJournalists] = useState([])
    const {user,setUser} = useContext(UserContext)

    const navigate = useNavigate()

    if (location.state == null) {
            
        return <Navigate to="/HomePage"/>
    }

    function changeRoute(){
        let path="/HomePage"
        navigate(path)
    }

    useEffect( () => {
        axios.get("http://localhost:80/Teverola-Times-Journal/index.php", {
            params: {
                type: "get-journalists",
                data: {
                    user_id: location.state.journalist_id
                }
            }
        })
        .then((response) => {
            setJournalists(response.data)
        })
    
    },[])

    const giornalista = journalists.map ( (giornalista) => {
        return(
            <>
                <p key={location.state.journalist_id}>{giornalista.Nome} {giornalista.Cognome}</p>
                <img src={giornalista.img} alt="journalist-pic" width={150} height={100} />
            </>
        )
    })

    function handleModify(){
        navigate("/ModificaArticolo" , {
            state: {
                titolo: location.state.titolo,
                argomento: location.state.argomento,
                img: location.state.img,
                body: location.state.body,
                id_articolo : location.state.id_article
            }
        })
    }

    function handleDelete(){
        axios.delete("http://localhost:80/Teverola-Times-Journal/delete-article.php",{
            data: {
                id_articolo : location.state.id_article
            }
        })
        .then((response) => {
            console.log(response.data)
            navigate("/HomePage")
        })
    }


    return(
        location.state ? 
        <>
            <div className="hero is-fullheight has-background-primary-light	">
                <div className="mb-6">
                    <span className="back-arrow"><AiOutlineArrowLeft/></span>
                    <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128"/>
                </div>
                
                <div className="hero-body container is-vcentered mt-6 ml-6 is-justify-content-space-between	">

                    <div className=" has-text-black has-text-centered column is-two-fifths">
                        
                        <div className="card">

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4 is-capitalized	">{location.state.titolo}</p>
                                        <p className="subtitle is-6">@{location.state.argomento}</p>
                                    </div>
                                </div>

                                <div className="content">
                                        {location.state.body}
                                    
                                    <br></br>
                                    <br></br>
                                    <time>{location.state.datapubblicazione}</time>
                                    <br></br>
                                    <br></br>
                                    {"Pubblicato da : "}{giornalista}
                                </div>
                                {user.User_ID === location.state.journalist_id ? 
                                    <>
                                        <button className="button is-medium is-success" onClick={handleModify}>Modifica Articolo</button>
                                        <br></br>
                                        <br></br>
                                        <button className="button is-medium is-danger" onClick={handleDelete}>Elimina Articolo</button>
                                    </>
                                 : ""}
                            </div>
                        </div>
                    </div>
                    
                        <img alt="article-pic" src={location.state.img} className="image is-relative mb-6" width={500} height={300} />
                </div>
            </div > 
        </>
        : navigate("/HomePage")
    )
}