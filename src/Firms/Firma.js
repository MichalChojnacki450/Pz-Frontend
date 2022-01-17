import React from "react";
import Loader from "../Loader/Loader"
import { useParams,Link } from 'react-router-dom'
import "../App.css"
import StarRating from "../Rate/Rating";
import {useAxiosGet} from "../Hooks/HttpRequests"
import Button from "../Buttons/Button"
import App from "../App.css"


function Firma(){
    const {id} = useParams()
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms/${id}`
    
    let firma = useAxiosGet(url)
    
    let content = null

    const showInMap =()=>{
        window.open(`${firma.data.localization}`);
    }
    if(firma.error){
        content=
        <p>Ther was an error please refresh or try agan later...</p>
    }

    if(firma.loading){
        content =<p><Loader></Loader></p>
    }

    if(firma.data){
        content=
        <div className="container">
        <div className="card-container">
        <div className="title">
            <h2>
                {firma.data.name}
            </h2>
            <div>
                {firma.data.description}
            </div>
                <p></p>
                <h4>Godziny otwarcia</h4>
            
            <div className="test">
                
                <li className="li">Pniedziałek: {firma.data.openHoursP}</li>
                <li className="li">Wtorek: {firma.data.openHoursW}</li>
                <li className="li">Środa: {firma.data.openHoursS}</li>
                <li className="li">Czwartek: {firma.data.openHoursC}</li>
                <li className="li">Piątek: {firma.data.openHoursPi}</li>
                <li className="li">Sobota: {firma.data.openHoursSo}</li>
                <li className="li">Niedziela: {firma.data.openHoursN}</li>
                
            </div>
            <h4>Smaki</h4>
            <div className="test">
                <p></p>
                
                    {(Array.isArray(firma.data.favor) && !firma.data.favor.length)?
                        <p>brak smaków</p>:<ul className="li2">                       
                        {firma.data && firma.data.favor.map((favors,key)=>{
                            return (<li key={key}>{favors}</li>)

                        })}
                    </ul>
                    }

                <p></p>
            </div>
            <div className="tileMe">
                <p>Rating<StarRating/></p>
            </div>
            <div className="button2">
                <Link>
                    <button className="button button1" onClick={showInMap}>
                        GoogleMap
                    </button>
                </Link>
            </div>
            <Button>Like</Button>
        </div>
                      
    </div>
    </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}
export default Firma;