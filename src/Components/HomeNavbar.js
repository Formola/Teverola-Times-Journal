import React,{useState,useContext} from "react";
import logo from "../images/logo.png"
import {AiOutlineSearch} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Pages/UserContexts";


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

    let functional_button;

    function handleSubmit(event){
        event.preventDefault()
        console.log(searchBar)
    }

    const navigate = useNavigate();

    function changeRoute(){
        let path = "/WriteArticle"
        navigate(path)
    }

    if ( props.userType == "ADMIN"){
        functional_button = (
            <button className="button is-white">Gestisci Utenti</button>
        )
    } else if ( props.userType == "GIORNALISTA"){
        functional_button = (
            <button className="button is-white" onClick={changeRoute}>Pubblica</button>
        )
    } else {
        functional_button = (<></>)
    }

    function handleLogOut(){
        logout()
        navigate("/")
    }

    return(
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src={logo} alt="logo"/>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <p className="navbar-item">
                            Il Tuo Profilo
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
                                    placeholder="Cerca keyword"
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