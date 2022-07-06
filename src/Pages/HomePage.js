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

    
    return(
        user &&
        <>
            <HomeNavbar userType={user["UserType"]}/>
            <div className="columns is-multiline is-mobile is-flex">
                <ArticleCard img={logo}/>
                <ArticleCard img={logo}/>
                <ArticleCard img={logo}/>
                <ArticleCard img={logo}/>
                <ArticleCard img={logo}/>
                <ArticleCard img={logo}/>
            </div>

        </>
    )
}