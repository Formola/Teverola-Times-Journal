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
import ModificaUtenti from './Pages/ModificaUtenti';
import ModificaProfilo from './Pages/ModificaProfilo';
import ModificaArticolo from './Pages/ModificaArticolo';

function App() {

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))

    useEffect(() => {
        if (!user) {
            if (!window.localStorage.getItem("JWT")) {
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
                if (response.status === 200) {
                    if (response.data["jwt-validate"]) {
                        setUser(response.data["user"])
                        window.localStorage.setItem("user", JSON.stringify(response.data["user"]))
                    }
                }
            })
        }
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
            <Route exact path="/ModificaUtenti" element={<ModificaUtenti/>}/>
            <Route exact path="/ModificaProfilo" element={<ModificaProfilo/>}/>
            <Route exact path="/ModificaArticolo" element={<ModificaArticolo/>} />
          </Route>
        </Routes>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
