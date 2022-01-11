import React from "react";
import { Link } from "react-router-dom";

function FirmaCard(props){
    return(
        <Link to={`/Firms/${props.firma.id}`}>
            <div>
                {props.firma.name}
            </div>
        </Link>
    )
}
export default FirmaCard;