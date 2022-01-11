import React,{useState,useEffect} from "react";
import axios from "axios";
import Loader from "../loader/Loader"
import { useParams } from 'react-router-dom'

function Firma(){
    const {id} = useParams()
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms/${id}`
    const [firma,setFirma]=useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

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
            <h1>{firma.data.name}</h1>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}
export default Firma;