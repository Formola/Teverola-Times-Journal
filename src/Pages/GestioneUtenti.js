import React,{useState,useContext, useEffect} from "react";
import { UserContext } from "./UserContexts";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GestioneUtenti(){

    const navigate = useNavigate()
    const {user,setUser} = useContext(UserContext)
    const [users,setUsers] = useState([])


    function changeRoute(){
        let path="/HomePage"
        navigate(path)
    }


    useEffect( () => {
        axios.get("http://localhost:80/Teverola-Times-Journal/index.php" , {
            params: {
                type: "get-all-users"
            }
        })
        .then( (response) => {
            setUsers(response.data)
        })
    }, [users])

    const utenti = users.map ( (user) => {
        return(
            <tr>
                <td>{user.User_ID}</td>
                <td>{user.UserType}</td>
                <td>{user.Nome}</td>
                <td>{user.Cognome}</td>
                <td>{user.Email}</td>
                <td>{user.Salary}</td>
                <td>{user.DataInizioAbbonamento}</td>
                <td>{user.DataFineAbbonamento}</td>
            </tr>
        )
    })

    const  row_form = (
        <tr>
            <td></td>
            <td><input></input></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
        </tr>
    )


    return(
        user.UserType == "ADMIN" ? 
        <>
            <div className="hero is-fullheight has-background-white ">
                <div className="p-2">
                    <span className="back-arrow"><AiOutlineArrowLeft/></span>
                    <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128 mgl-medium"/>
                </div>

                <div className="hero-body container is-flex-direction-column mt-6">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>User_ID</th>
                            <th>UserType</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>DataInizioAbbonamento</th>
                            <th>DataFineAbbonamento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {utenti}
                    </tbody>
                    </table>
                </div>
                
            </div > 
        </>
        : navigate("/HomePage")
    )
}