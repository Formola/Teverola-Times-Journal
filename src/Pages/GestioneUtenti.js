import React,{useState,useContext, useEffect} from "react";
import { UserContext } from "./UserContexts";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {BiPencil} from "react-icons/bi"
import {TiDelete} from "react-icons/ti"

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
    }, [])

    const utenti = users.map ( (user) => {
        return(
            <>
                <tr >
                    <td >{user.User_ID}</td>
                    <td >{user.UserType}</td>
                    <td >{user.Nome}</td>
                    <td >{user.Cognome}</td>
                    <td >{user.Email}</td>
                    <td >{user.Salary}</td>
                    <td >{user.DataInizioAbbonamento}</td>
                    <td >{user.DataFineAbbonamento}</td>

                    {users.indexOf(user) !== 0 ? 
                    <td>
                        <button className="button ml-6 is-small mt-2 is-primary"
                        onClick={handleChange}
                        key={user.User_ID}
                        data-rowid={user.User_ID}
                        user_type={user.UserType}
                        nome={user.Nome}
                        cognome={user.Cognome}
                        email={user.Email}
                        salary={user.Salary}
                        datainizio = {user.DataInizioAbbonamento}
                        datafine = {user.DataFineAbbonamento}
                        >
                            <BiPencil/>
                        </button>
                    </td>
                    : "" }
                    

                    {users.indexOf(user) !== 0  ? 
                    <td>
                        <button className="button ml-4 is-small is-danger mt-2"
                            data-rowid={users.indexOf(user)}
                            id_user={user.User_ID}
                            onClick={handleDelete}
                        >
                            <TiDelete/>
                        </button>
                    </td>
                    : "" }
                </tr>
            </>
        )
    })

    function handleChange(event){
        const row_id = event.currentTarget.getAttribute("data-rowid")
        const row_user_type = event.currentTarget.getAttribute("user_type")
        const row_nome = event.currentTarget.getAttribute("nome")
        const row_cognome = event.currentTarget.getAttribute("cognome")
        const row_email = event.currentTarget.getAttribute("email")
        const row_salary = event.currentTarget.getAttribute("salary")
        const row_datainizio = event.currentTarget.getAttribute("datainizio")
        const row_datafine = event.currentTarget.getAttribute("datafine")

        let path="/ModificaUtenti"

        if(row_id === user.User_ID){
            Set_Error_Delete_Message("Non puoi cambiarti ruolo da solo")
        }else{
            navigate(path, {
                state: {
                    user_id : row_id,
                    user_type: row_user_type,
                    nome: row_nome,
                    cognome: row_cognome,
                    email: row_email,
                    salary: row_salary,
                    datainizioabbonamento: row_datainizio,
                    datafineabbonamento: row_datafine,
                    fromManagement: true
                }
            }) 
        }
    }

    const [error_delete_message, Set_Error_Delete_Message] = useState("")

    const DeleteUser = (id,userid) => {

        const newusers = [...users];
        if ( id !== 0) {
            newusers.splice(id,1)
        } 
        if ( userid === user.User_ID){
            Set_Error_Delete_Message("Non puoi eliminare te stesso !")
        } else {
        axios.delete("http://localhost:80/Teverola-Times-Journal/delete-user.php", {
            headers: {
              Authorization: "authorizationToken"
            },
            data: {
              source: userid
            }
          })
          .then((response) => {
            
            if( id === 0){
                Set_Error_Delete_Message("Non puoi rimuovere questo admin")
            } else {
                Set_Error_Delete_Message("Utente eliminato con successo")
            }

          })
          setUsers(newusers);
        }
          
    }

    function handleDelete(event){
        const row_id = event.currentTarget.getAttribute("data-rowid")
        const userid = event.currentTarget.getAttribute("id_user")
        DeleteUser(row_id,userid)
    }
    

    return(
        user.UserType === "ADMIN" ? 
        <>
            <div className="hero is-fullheight has-background-white mb-6">
                <div className="p-2">
                    <span className="back-arrow"><AiOutlineArrowLeft/></span>
                    <img src={logo} alt="logo" onClick={changeRoute} className="image is-138x128 mgl-medium"/>
                </div>

                <div className="hero-body container is-flex-direction-column mt-6">
                    <table className="table mt-4">
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
                            <th>Modifica</th>
                            <th>Cancella</th>
                        </tr>
                    </thead>

                    <tbody>
                        {utenti}
                    </tbody>
                    </table>
                    {error_delete_message}
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Attenzione...se elimini i giornalisti eliminerai anche gli articoli da loro pubblicati!</p>

                </div>
            </div > 
        </>
        : navigate("/HomePage")
    )
}