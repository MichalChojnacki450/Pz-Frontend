import React,{useState,useEffect} from "react";
import axios from "axios";
import Loader from "../Loader/Loader"
import { useParams,Link } from 'react-router-dom'
import "../App.css"
import StarRating from "../Rate/Rating";

function Firma(){
    const {id} = useParams()
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms/${id}`
    const [firma,setFirma]=useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    const showInMap =()=>{
        window.open(`${firma.data.localization}`);
    }

    useEffect(()=>{
        setFirma({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response=>{
            setFirma({
                loading: false,
                data: response.data,
                error: false    
            })
        })
        .catch(()=>{
            setFirma({
                loading:false,
                data: null,
                error: true
            })
        })
    },[url])

    if(firma.error){
        content=
        <p>Ther was an error please refresh or try agan later...</p>
    }

    if(firma.loading){
        content =<p><Loader></Loader></p>
    }

    if(firma.data){
        content=
        <div>
        <div className="p-3">
            <h3>
                {firma.data.name}
            </h3>
            <div>
                {firma.data.description}
            </div>
            <div>
                <p></p>
                <p>Godziny otwarcia</p>
                <li>Pniedziałek: {firma.data.openHoursP}</li>
                <li>Wtorek: {firma.data.openHoursW}</li>
                <li>Środa: {firma.data.openHoursS}</li>
                <li>Czwartek: {firma.data.openHoursC}</li>
                <li>Piątek: {firma.data.openHoursPi}</li>
                <li>Sobota: {firma.data.openHoursSo}</li>
                <li>Niedziela: {firma.data.openHoursN}</li>
            </div>
            <div>
                <p></p>
                <p>Smaki</p>
                    {(Array.isArray(firma.data.favor) && !firma.data.favor.length)?
                        <p>brak smaków</p>:<ul>                       
                        {firma.data && firma.data.favor.map((favors,key)=>{
                            return (<li key={key}>{favors}</li>)

                        })}
                    </ul>
                    }

                <p></p>
            </div>
            <Link>
                <button onClick={showInMap}>
                    GoogleMap
                </button>
            </Link>
            <div>
                <StarRating/>
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