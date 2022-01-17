import React,{useState} from "react";
import Loader from "../Loader/Loader";
import FirmaCard from "./FirmaCard";
import {FormControl,Form} from "react-bootstrap";
import {useAxiosGet} from "../Hooks/HttpRequests"
import App from "../App.css"
function Firms(){
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms`

    const [searchTerm,setSearchTerm]= useState("");
    let firms = useAxiosGet(url)
    let content = null
    
    if(firms.error){
        content=
        <p>Ther was an error please refresh or try agan later...</p>
    }

    if(firms.loading){
        content =<p><Loader></Loader></p>
    }

    if(firms.data){
        content=
        firms.data.filter((val)=>{  
            if(searchTerm ===""){
                return val
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }else if(val.favor.toString().toLowerCase().includes(searchTerm.toLowerCase()))
            {
                return val          
            }
        }).map((firma,key)=>
            <div key={key}>
                <FirmaCard
                    firma={firma}
                />
            </div>
        )
    }
    return(
        <div>
            <Form>
                <FormControl 
                    type="search"
                    placeholder="Search"
                    className="Search-bar"
                    aria-label="Search"
                    onChange={ event =>{setSearchTerm(event.target.value)}}
                />
            </Form>
            {content}
        </div>
    )
}
export default Firms;