import React,{useContext, useState} from "react";
import {MdAttachEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri"
import {AiOutlineArrowLeft} from "react-icons/ai"
import logo from "../images/logosenzascritta.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import { UserContext } from "./UserContexts";
import { Navigate } from "react-router-dom";

export default function LoginPage(){

    const navigate = useNavigate();
    const [error, setError] = useState("")

    const {user,setUser} = useContext(UserContext)


    const routeChange = () => {
        let path = "/";
        navigate(path); 
    }

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    function handleChange(event){

        const {name,value} = event.target
        setFormData( prevFormData => {
            return{
                ...prevFormData,
                [name]: value
                
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData.email, md5(formData.password))
        setError("")
        axios.get("http://localhost:80/Teverola-Times-Journal/index.php", {
            params: {
              type: "user-login",
              data: {
                email: formData.email,
                password: md5(formData.password)
              }
      
            }
          })
            .then((response) => {
              setUser(response.data["user"])
              window.localStorage.setItem("JWT", response.data["jwt"])
              navigate("/HomePage", { replace: true })
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.status == 401) {
                  setError("Credenziali sbagliate.")
                }
              }
            })
    }
    
    return(
        user ? <Navigate  to="/HomePage"/> : 
        <>
            <div className="hero is-success is-fullheight is-vcentered has-text-centered is-flex">
                <p className="title is-1">LOGIN</p>
                <span className="back-arrow"><AiOutlineArrowLeft/></span>
                <img src={logo} alt="logo" className="image is-138x128 mgl-medium" onClick={routeChange}/>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Email</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input 
                                                className="input"
                                                type="email"
                                                placeholder="Email"
                                                maxLength="30"
                                                required
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <span className="icon is-small is-left">
                                            <MdAttachEmail/>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label has-text-white is-size-4 has-text-left" >Password</label>
                                        <p className="control has-icons-left">
                                            <input 
                                                className="input"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                name="password"
                                                onChange={handleChange}
                                            />
                                            <span className="icon is-small is-left">
                                            <RiLockPasswordFill/>
                                            </span>
                                        </p>
                                    </div>
                                    <br></br>
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-hovered is-rounded is-medium">
                                            Login
                                            </button>
                                            <br></br>
                                            <br></br>
                                            {error && (<span> {error} </span>)}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}