import React,{useState,useEffect} from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import FirmaCard from "./FirmsCard";
import {FormControl,Form} from "react-bootstrap";

function Favors(){
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms`
    const [favors,setfavors]=useState({
        loading: false,
        data: null,
        error: false
    })
    const [searchTerm,setSearchTerm]= useState("");

    
    let content = null
    
    useEffect(()=>{
        setfavors({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response=>{
            setfavors({
                loading: false,
                data: response.data,
                error: false    
            })
        })
        .catch(()=>{
            setfavors({
                loading:false,
                data: null,
                error: true
            })
        })
    },[url])
    
    if(favors.error){
        content=
        <p>Ther was an error please refresh or try agan later...</p>
    }

    if(favors.loading){
        content =<p><Loader></Loader></p>
    }
    if(favors.data){
        content=
        favors.data.filter((val)=>{
            if(searchTerm ===""){
                return val
            }else if(val.favors.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((favor,key)=>
            <div>
                <FirmaCard
                    favor={favor}
                />
            </div>
        )
    }
    return(
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={ event =>{
                    setSearchTerm(event.target.value);
                }}
                />
            </Form>
            {content}
        </div>
    )
}
export default Favors;