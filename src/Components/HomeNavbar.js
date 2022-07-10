import React,{useState,useContext,useEffect} from "react";
import logo from "../images/logo.png"
import {AiOutlineSearch} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Pages/UserContexts";
import axios from "axios"

export default function HomeNavbar(props){

    const {logout} = useContext(UserContext)


    const [searchBar, setSearchBar] = useState({
        searchText: ""
    })

    function handleSearch(event){
        const {name,value} = event.target

        setSearchBar( prevSearchBar => {
            return{
                [name] : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        props.get_data(articlesFromSearch)
        setSearchBar({searchText: ""})
        
    }

    const navigate = useNavigate();

    function changeRouteWrite(){
        let path = "/WriteArticle"
        navigate(path)
    }

    let functional_button;
    
    if ( props.userType === "ADMIN"){
        functional_button = (
            <button className="button is-white" onClick={changeRouteManagement}>Gestisci Utenti</button>
        )
    } else if ( props.userType === "GIORNALISTA"){
        functional_button = (
            <button className="button is-white" onClick={changeRouteWrite}>Pubblica</button>
        )
    } else {
        functional_button = (<></>)
    }

    function handleLogOut(){
        logout()
        navigate("/")
    }

    function changeRouteProfile(){
        let path="/ProfilePage"
        navigate(path)
    }

    function changeRouteManagement(){
        let path="/GestioneUtenti"
        navigate(path)
    }

    const [articlesFromSearch, setArticlesFromSearch] = useState([])

    useEffect( () => {
        axios.get("http://localhost:80/Teverola-Times-Journal/index.php",{
            params: {
                type: "get-from-searchbar",
                data: {
                    keyword: searchBar.searchText
                }
            }
        })
        .then((response) => {   
            setArticlesFromSearch(response.data)
        })

    },[searchBar])


    return(
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src={logo} alt="logo"/>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <p className="navbar-item">
                            <button className="button is-white" onClick={changeRouteProfile}>Il Tuo Profilo</button>
                        </p>
                        <p className="navbar-item">
                            {functional_button}
                        </p>
                    </div>
                    <div className="field navbar-item">
                        <form onSubmit={handleSubmit}>
                            <label className="label">Cerca Articolo</label>
                            <div className="control">
                                <input 
                                    className="input is-medium" 
                                    type="text"
                                    placeholder="Cerca Articolo per @Argomento..."
                                    onChange={handleSearch}
                                    name="searchText"
                                    value={searchBar.searchText}
                                    
                                />
                                <button className="button is-white"><span className="icon-search"><AiOutlineSearch/></span></button>
                                </div>
                        </form>
                     </div>

                    <div className="navbar-end ">
                        <div className="navbar-item ">
                            <p className="user-type">Sei Loggato come : {props.userType}</p>
                            <div className="buttons ">
                            <button className="button is-primary" onClick={handleLogOut}>
                                Log Out
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}