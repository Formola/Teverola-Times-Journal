import React from "react";
import "./ArticleCard.css"
import { useNavigate } from "react-router-dom";

export const ArticleCard = (props) => {

    const navigate = useNavigate()

    function changeRouteArticlePage(){
        let path="/ArticlePage"
        navigate(path, {
            state: {
                id_article: props.id_article,
                titolo: props.titolo,
                argomento: props.argomento,
                body: props.body,
                img: props.img,
                datapubblicazione: props.datapubblicazione,
                journalist_id: props.journalist_id 
            }
        })
    }

    return(
        <>
            <div className="section ">
                <div className="img-article">
                    <img src={props.img} alt="img" />
                </div>

                <div className="card-content">  

                    <div className="card-title">
                        <h3 className="has-text-weight-bold	is-capitalized">{props.titolo}</h3>
                        <h5 className="has-text-weight-bold	is-capitalized">@{props.argomento}</h5>
                        <br></br>
                    </div>
                    <div className="card-body ">
                        {props.body.slice(0,200)}
                        <br></br>
                        <br></br>
                        <time >{props.datapubblicazione}</time>
                        <br></br>
                        <button className="button is-text" onClick={changeRouteArticlePage}>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}