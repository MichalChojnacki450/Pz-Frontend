import React from "react";
import { Link } from "react-router-dom";
import App from "../App.css"

function FirmaCard(props){
    
    return(
        <div className="container">
        <div className="card-container">
            <div className="p-3">
                <h3 className="title">
                    {props.firma.name}
                </h3>
                <div className="title">
                    {props.firma.description}
                </div>
                <div className="title">
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                </div>
                <div className="title">
                    <Link to={`/Firms/${props.firma.id}`}>
                        <button className="button button1">
                            View
                        </button>
                    
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
export default FirmaCard;