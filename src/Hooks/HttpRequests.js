import {useEffect,useState} from "react";
import Axios from "axios";

export function useAxiosGet(url) {
    const [addFirma,setAddFirma]=useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(()=>{
        setAddFirma({
            loading: true,
            data: null,
            error: false
        })
        Axios.get(url)
        .then(response=>{
            setAddFirma({
                loading: false,
                data: response.data,
                error: false    
            })
        })
        .catch(()=>{
            setAddFirma({
                loading:false,
                data: null,
                error: true
            })
        })
    },[url])
 
    return addFirma   
}