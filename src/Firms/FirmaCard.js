import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../Rate/Rating";

function FirmaCard(props){
    
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    {props.firma.name}
                </h3>
                <div className="mb-3">
                    {props.firma.description}
                </div>
                <div className="mb-3">
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                    {props.firma.openHours}
                </div>
                <Link 
                    to={`/Firms/${props.firma.id}`}
                    className="bg-blue-400 text-blue p-2 flex justify-center w-full"
                    >
                    <button>
                        View
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default FirmaCard;