import React,{Component} from "react";
import { Navbar,Nav,Container,} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "../auth-comp/Login";
import Firma from "../Firms/Firma";
import Firms from "../Firms/Firms";
import Home from "../Home";
import Maps from "../Map/Map";
import Register from "../auth-comp/Register";
import Profile from "../auth-comp/Profile";

export default class NavbarComp extends Component{
    
    render(){
        return(
        <Router> 
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Lody Wrocław</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/Map"}>Mapa</Nav.Link>
                                    <Nav.Link as={Link} to={"/Firms"}>Firmy</Nav.Link>
                                    <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
                                    <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link>

                                </Nav>    
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 
                </div>
                <div>
                    <Switch>
                        <Route path="/Home">
                            <Home/>
                        </Route>
                        <Route path="/Map">
                            <Maps/>
                        </Route>
                        <Route path="/Firms/:id">
                            <Firma/>
                        </Route>
                        <Route path="/Firms">
                            <Firms/>
                        </Route>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                        <Route path="/Register">
                            <Register/>
                        </Route>
                        <Route path="/Profile">
                            <Profile/>
                        </Route>
                    </Switch>
                </div>
        </Router>

        )
    }
}
// import React, { Component } from 'react'
// import {MenuItems} from"./MenuItems"
// import './Navbar.css'
// import {Link} from 'react-router-dom'

// class Navbar extends Component {
//     state = { clicked:false}

//     handleClick=()=>{
//         this.setState({clicked:!this.state.clicked})
//     }

//     render(){
//         return(
//            <nav className="NavbarItems">
//                <h1 className="navabar-logo">Lody<i className="fab fa-react"></i></h1>
//                <div className="menu-icon" onClick={this.handleClick}>
//                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
//                </div>
//                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
//                    {MenuItems.map((item,index)=>{
//                        return(
//                            <li key={index}>
//                                <Link to={item.url}>
//                                     <a>
//                                         {item.title}
//                                     </a>
//                                </Link>
//                             </li>
//                        )
//                    })}
                   
//                </ul>
//            </nav> 
//         )
//     }
// }

// export default Navbar