import React, { useEffect,useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {useLocation, useNavigate} from 'react-router-dom';
import logo from "../images/logosenzascritta.png"
import "./ArticlePage.css"
import axios from "axios"
import { GiOneEyed } from "react-icons/gi";

export default function ArticlePage(){

    const location = useLocation()
    const [journalists, setJournalists] = useState([])

    const navigate = useNavigate()

    function changeRoute(){
        console.log("click")
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

    const giornalisti = journalists.map ( (giornalista) => {
        return(
            <>
                <p>{giornalista.Nome} {giornalista.Cognome}</p>
                <img src={giornalista.img} alt="journalist-pic" width={150} height={100}/>
            </>
        )
    })


    return(
        location.state ? 
        <>
            <div className="hero is-fullheight has-background-primary-light	">
            <div className="p-2">
                    <span className="back-arrow"><AiOutlineArrowLeft/></span>
                    <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128 mgl-medium"/>
                </div>
                
                <div className="hero-body container is-vcentered mt-6 ml-8 is-justify-content-space-between	">

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
                                    {"Pubblicato da : "}{giornalisti}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        <img alt="article-pic" src={location.state.img} className="image is-relative" width={500} height={300}/>
                    
                </div>

            </div > 
        </>
        : navigate("/HomePage")
    )
}