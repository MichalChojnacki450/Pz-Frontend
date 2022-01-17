import React, { Component } from "react";
import Loader from "../Loader/Loader"
import "../App.css"
import FirmaCard from "./FirmaCard";
import {useAxiosGet} from "../Hooks/HttpRequests"
import { Card, Form, Col } from "react-bootstrap";

// function AddFirma(){

//     const url=`https://61d83e5de6744d0017ba89f0.mockapi.io/FirmsList/Firms`
    
//     let addFirma = useAxiosGet(url)
    
//     let content = null
    
//     if(addFirma.error){
//         content=
//         <p>Ther was an error please refresh or try agan later...</p>
//     }

//     if(addFirma.loading){
//         content =<p><Loader></Loader></p>
//     }

//     if(addFirma.data){
//         content=
//         addFirma.data.map((firma,key)=>
//             <div key={key}>
//                 <FirmaCard
//                     firma={firma}
//                 />
//             </div>
//         )
//     }
//     return(
//         <div>
//             {content}
//         </div>
//     )
// }
// export default AddFirma;

export default class AddFirma extends Component{
    render(){
        return(
        
        <Card className={"border border-light bg-light test-black"}>
            <Card.Header>Add new Shop</Card.Header>
            <Form>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="Name"
                                className={"bg-light text-black"}
                                palceholder="Enter Shop Name" />
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Form>
        </Card> 
        )
    }
}

            

    
      




