import './App.css';
import React,{useState,useEffect} from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {StartedPage} from "./Pages/StartedPage"
import { SignUpPage } from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { WriteArticle } from './Pages/WriteArticle';
import { UserContext } from './Pages/UserContexts';
import axios from 'axios';
import PrivateOutlet from './Components/PrivateOutlet';
import ProfilePage from './Pages/ProfilePage';
import GestioneUtenti from './Pages/GestioneUtenti';
import ArticlePage from './Pages/ArticlePage';


function App() {

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        if (!user) {
            if (!window.localStorage.getItem("JWT")) {
                setIsLoading(false)
                return
            }
            if (window.localStorage.getItem("user")) {
                setUser(JSON.parse(window.localStorage.getItem("user")))
                setIsLoading(false)
                return
            }
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
                        window.localStorage.setItem("user", JSON.stringify(response.data["user"]))
                    }
                }
            })
        }
        setIsLoading(false)
    }, [user])

    const logout = () => {
        window.localStorage.removeItem("JWT")
        window.localStorage.removeItem("user")
        setUser(null)
    }

    const values = {
        user,
        setUser,
        logout
    }

  return (
    <UserContext.Provider value={values}>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartedPage/>} />
          <Route exact path="/SignUp" element={<SignUpPage/>} />
          <Route exact path="/Login" element={<LoginPage/>} />
        <Route path="/" element={<PrivateOutlet/>}>
          <Route exact path="/HomePage" element={<HomePage/>} />
          <Route exact path="/WriteArticle" element={<WriteArticle />} />
          <Route exact path="/ProfilePage" element={<ProfilePage/>}/>
          <Route exact path="/GestioneUtenti" element={<GestioneUtenti/>} />
          <Route exact path="/ArticlePage" element={<ArticlePage/>} />
        </Route>

        </Routes>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
