import React,{useState,useEffect} from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import FirmaCard from "./FirmaCard";
import {FormControl,Form} from "react-bootstrap";

function Firms(){
    const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms`
    const [firms,setFirms]=useState({
        loading: false,
        data: null,
        error: false
    })
    const [searchTerm,setSearchTerm]= useState("");

    let content = null

    useEffect(()=>{
        setFirms({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response=>{
            setFirms({
                loading: false,
                data: response.data,
                error: false    
            })
        })
        .catch(()=>{
            setFirms({
                loading:false,
                data: null,
                error: true
            })
        })
    },[url])
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
            }else if(val.favors.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((firma,key)=>
            <div>
                <FirmaCard
                    firma={firma}
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
            {/* {content} */}
        </div>
    )
}
export default Firms;