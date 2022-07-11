import React,{useContext, useEffect} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../images/logosenzascritta.png"
import { UserContext } from "./UserContexts";
import { useNavigate,  } from "react-router-dom";
import axios from "axios";
import md5 from "md5";


export default function ProfilePage(){

    const {user,setUser} = useContext(UserContext)

    const navigate = useNavigate()

    function changeRoute(){
        let path="/HomePage"
        navigate(path)
    }

    function handleClick(){
        navigate("/ModificaProfilo", {
            state: {
                nome: user.Nome,
                cognome: user.Cognome,
                img: user.img,
                user_id: user.User_ID,
                password: md5(user.Password)
            }
        })
    }

    useEffect(() => {
        if (!window.localStorage.getItem("JWT")) {
            return
        }
        if (user) {
            axios.get("http://localhost:80/Teverola-Times-Journal/index.php", {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("JWT")}`,
                },
                params: {
                    type: "fetch-session"
                }
            }).then((response) => {
                if (response.status === 200) {
                    if (response.data["jwt-validate"]) {
                        setUser(response.data["user"])
                    }
                }
            })
        }
    }, [])

    let other_info
    if ( user.UserType === "GIORNALISTA"){
        other_info = (
            <div className="column"> 
                <div className="is-flex-direction-column">
                    <span className="is-size-4 has-text-weight-bold">Stipendio: </span>
                    <span className="is-size-4">{user ? user["Salary"] : "nada"}€</span>
                </div>
            </div>
        )
    } else if ( user.UserType === "UTENTE"){
        other_info = (
            <div className="column"> 
                <div className="is-flex-direction-column">
                    <span className="is-size-4 has-text-weight-bold">Data Inizio Abbonamento: </span>
                    <span className="is-size-4">{user ? user["DataInizioAbbonamento"] : "nada"}</span>
                </div>

                <div className="is-flex-direction-column">
                    <span className="is-size-4 has-text-weight-bold">Data Fine Abbonamento: </span>
                    <span className="is-size-4">{user ? user["DataFineAbbonamento"] : "nada"}</span>
                </div>
            </div>
        )
    }

    return(
        <>
            <section className="hero is-fullheight has-background-warning-light">
                <div className="p-2">
                    <span className="back-arrow"><AiOutlineArrowLeft/></span>
                    <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128 mgl-medium"/>
                </div>

                <div className="hero-body container">

                    <div className="is-flex is-flex-direction-column has-text-white has-text-centered">
                        
                        <div className="box is-size-3 mt-2">
                            <h1 className="title is-size-3">Profilo di {user ? user["Nome"] : "nada"} {user ? user["Cognome"] : "nada"}</h1>
                            <div className="column">
                                <div className="is-flex-direction-column">
                                    <span className="is-size-4 has-text-weight-bold">Ruolo: </span>
                                    <span className="is-size-4">{user ? user["UserType"] : "nada"}</span>
                                </div>
                            </div>
                            
                            <div className="">
                                <div className="is-flex-direction-column">
                                    <span className="is-size-4 has-text-weight-bold">Nome: </span>
                                    <span className="is-size-4 is-capitalized">{user ? user["Nome"] : "nada"}</span>
                                </div>
                            </div>
                            
                            <div className="column">
                                <div className="is-flex-direction-column">
                                    <span className="is-size-4 has-text-weight-bold">Cognome: </span>
                                    <span className="is-size-4 is-capitalized">{user ? user["Cognome"] : "nada"}</span>
                                </div>
                            </div>

                            <div className="column">
                                <div className="is-flex-direction-column">
                                    <span className="is-size-4 has-text-weight-bold">Email: </span>
                                    <span className="is-size-5">{user ? user["Email"] : "nada"}</span>
                                </div>
                            </div>

                            {other_info}
                            <br></br>

                            <div className=""> 
                                <div className="direction-column mr-6 is-flex columns is-flex is-vcentered is-justify-content-space-between	">
                                    <span className="is-size-4 mr-5 ml-2 has-text-weight-bold">Foto Profilo: </span><br></br>
                                    <img className="is-relative image is-128x128" src={user ? user["img"] : "nada"} alt="profile-pic" />
                                </div>
                            </div>

                            <div className="has-text-centered p-2 mt-6">
                                <button className="button is-danger is-medium" onClick={handleClick}>Modifica</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section > 
        </>
    )
}