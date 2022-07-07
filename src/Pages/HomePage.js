import React,{useEffect, useState} from "react"
import logo from "../images/logo.png"
import "./HomePage.css"
import { ArticleCard } from "../Components/ArticleCard"
import axios from "axios"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar"



export const HomePage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    const [articles,setArticles] = useState([])

    useEffect(() => {
        if (!window.localStorage.getItem("JWT")) {
            return
        }
        if (!user) {
            axios.get("http://localhost:80/Teverola-Times-Journal/index.php", {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("JWT")}`,
                },
                params: {
                    type: "fetch-session"
                }
            }).then((response) => {
                if (response.status == 200) {
                    if (response.data["jwt-validate"]) {
                        setUser(response.data["user"])
                    }
                }
            })
        }

        
    }, [])

    useEffect( () => {
        axios.get("http://localhost:80/Teverola-Times-Journal/index.php" , {
            params: {
                type: "get-articles"
            }
        })
        .then((response) => {
            setArticles(response.data)
        })
    },[])
   

    const articoli = articles.map ( (articolo) => {
        return(
            <ArticleCard 
                id_article={articolo.ID_Article}
                titolo={articolo.Titolo}
                argomento={articolo.Argomento}
                body={articolo.body}
                img={articolo.img}
                datapubblicazione={articolo.DataPubblicazione}
                journalist_id = {articolo.Utente}
            />
        )
    })

    const [articoli_from_search,setArticoli_from_search] = useState()

    const get_article_from_search = (data) => {
        if(data.lenght != 0){
            setArticoli_from_search(data)
        }
    }
    
    return(
        user &&
        <>
            <HomeNavbar userType={user["UserType"]} get_data={get_article_from_search}/>
            <div className="columns is-multiline is-mobile is-flex">
                {articoli}
            </div>

        </>
    )
}