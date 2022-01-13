import React from "react";
import { Link } from "react-router-dom";

function FirmaCard(props){
    return(
        <div>
            <Link to={`/Firms/${props.firma.id}`}>
                <div>
                    <h1>{props.firma.name}</h1>
                </div>        
            </Link>
        </div>
    )
}
export default FirmaCard;