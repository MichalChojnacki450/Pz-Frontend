import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Home=()=>{

    const isLoggedIn = true;

    useEffect(()=>{
        axios.get("http://localhost:3000/health/ping").then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(console.error(err))
        })
    })
    return(
        <div>
            
            <h1>Witaj na stronie głównej</h1>
            {isLoggedIn && <h1>Test</h1>}
            
        </div>
    )
}

export default Home;
