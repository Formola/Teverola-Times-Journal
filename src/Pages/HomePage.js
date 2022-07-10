import React,{useEffect, useState} from "react"
import "./HomePage.css"
import { ArticleCard } from "../Components/ArticleCard"
import axios from "axios"
import HomeNavbar from "../Components/HomeNavbar"



export const HomePage = () => {

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
                if (response.status === 200) {
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
                key={articolo.ID_Article}
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
    const [num_articoli_trovati, setNum_Articoli_trovati] = useState(0)

    const get_article_from_search = (data) => {
        if(data.length !== 0){
            setArticoli_from_search(data)
            setNum_Articoli_trovati(data.length)
        } else{
            setArticoli_from_search(articles)
        }
    }

    let articles_from_search
    if ( num_articoli_trovati > 0){
        articles_from_search = articoli_from_search.map ( (articolo) => {
            return(
                <ArticleCard
                    key={articolo.ID_Article}
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
    }
    
    return(
        user &&
        <>
            <HomeNavbar userType={user["UserType"]} get_data={get_article_from_search}/>
            <div className="columns is-multiline is-mobile is-8">
                {num_articoli_trovati !==0 ? articles_from_search : articoli}
            </div>

        </>
    )
}