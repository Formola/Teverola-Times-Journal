import React,{useState,useContext} from "react";
import logo from "../images/logosenzascritta.png"
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./WriteArticle.css"
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContexts";
import axios from "axios";

export const WriteArticle = () => {

    const {user,setUser} = useContext(UserContext)

    if ( user.UserType !== "GIORNALISTA"){
        return <Navigate to="/HomePage"/>
    }
    const [message,setMessage] = useState("")

    const [articleData, setArticleData] = useState(
        {
            title: "",
            argomento: "",
            body: "",
            img: "",
        }
    )

    function handleChange(event){

        const {name,value} = event.target

        setArticleData( prevArticleData => {
            return{
                ...prevArticleData,
                [name] : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:80/Teverola-Times-Journal/publish-article.php", {
            data: {
                title: articleData.title,
                argomento : articleData.argomento,
                body: articleData.body,
                img: articleData.img,
                id_utente: user.User_ID
            },
        }, {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            } 
       })
       .then((response) => {
            if(response.data === "Query inviata con successo"){
                setMessage("Articolo Pubbliato !")
                navigate("/HomePage")
            }
       })
    }

    const navigate = useNavigate()

    function changeRoute(){
        let path = "/HomePage"
        navigate(path)
    }

    return(
         user.UserType === "GIORNALISTA" ? 
        <>
            <div className="hero is-primary is-fullheight has-text-centered is-vcentered is-flex">
                <h1 className="title is-2 has-text-centered	mt-5 mb-6" >Ciao {user.Nome}...SCRIVI ARTICOLO</h1>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128 mgl-medium"/>

                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Titolo</label>
                                        <p className="control">
                                            <input 
                                                className="input is-capitalized	"
                                                type="text"
                                                placeholder="Titolo"
                                                maxLength="100"
                                                required
                                                name="title"
                                                onChange={handleChange}
                                                value={articleData.title}
                                            />
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Argomento</label>
                                        <p className="control">
                                            <input 
                                                className="input"
                                                type="text"
                                                placeholder="Argomento Articolo"
                                                maxLength="20"
                                                required
                                                name="argomento"
                                                onChange={handleChange}
                                                value={articleData.argomento}
                                            />
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Immagine</label>
                                        <p className="control">
                                            <input 
                                                className="input"
                                                type="text"
                                                placeholder="Inserisci Url immagine articolo"
                                                maxLength="2048"
                                                name="img"
                                                onChange={handleChange}
                                                value={articleData.img}
                                            />
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Body</label>
                                        <textarea 
                                            className="textarea is-link" 
                                            placeholder="body articolo"
                                            required
                                            maxLength={10000}
                                            name="body"
                                            onChange={handleChange}
                                            value={articleData.body}
                                        />
                                    </div>


                                    <div className="field is-vcentered">
                                            <button className="button is-hovered is-rounded is-medium mt-5 ml-1">
                                                Pubblica
                                            </button>
                                    </div>
                                </form>
                                <br></br>
                                {message}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
        : navigate("/HomePage")
    )
}