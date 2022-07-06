import React from "react";
import "./ArticleCard.css"

export const ArticleCard = (props) => {

    return(
        <>
            <div className="section">
                <div className="img-article">
                    <img src={props.img} alt="img" />
                </div>

                <div className="card-content">  

                    <div className="card-title">
                        <h3>titolo</h3>
                    </div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        <br></br>
                        <button className="button is-text">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}