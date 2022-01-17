import React,{Component} from "react";
import { Navbar,Nav,Container,} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import Bookmarks from "../Firms/Bookmark"
  import Firma from "../Firms/Firma"
  import Firms from "../Firms/Firms"
  import AuthService from "../services/auth.service";
  import Maps from "../Map/Map"
  import Login from "../components/login.component";
  import Register from "../components/register.component";
  import Home from "../components/home.component";
  import Profile from "../components/profile.component";
  import BoardUser from "../components/board-user.component";
  import BoardModerator from "../components/board-moderator.component";
  import BoardAdmin from "../components/board-admin.component";
  import EventBus from "../common/EventBus";



export default class NavbarComp extends Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state={
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }
    componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
        
        EventBus.on("logout", () => {
          this.logOut();
        });
      }
    
      componentWillUnmount() {
        EventBus.remove("logout");
      }
    
      logOut() {
        AuthService.logout();
        this.setState({
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        });
      }
    
    render(){
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        
        return(
        <Router> 
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Lody Wrocław</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/Map"}>Mapa</Nav.Link>
                                    <Nav.Link as={Link} to={"/Firms"}>Firmy</Nav.Link>

                                    
                                    {showModeratorBoard &&(
                                        <Nav.Link as={Link} to={"/mod"}>Moderator Board</Nav.Link>
                                    )}

                                    {showAdminBoard &&(
                                        <Nav.Link as={Link} to={"/admin"}>Admin Board</Nav.Link>
                                    )}
                                    {currentUser &&(
                                        <>
                                            <Nav.Link as={Link} to={"/Ulubione"}>Ulubione</Nav.Link>
                                            <Nav.Link as={Link} to={"/user"}>User</Nav.Link>
                                        </>
                                    )}
                                    {currentUser ?(
                                        <>
                                            <Nav.Link as={Link} to={"/profile"}>{currentUser.username}</Nav.Link>
                                            
                                            <a href="/login" className="nav-link" onClick={this.logOut}>
                                                Logout
                                            </a>
                                        </>
                                    ):(
                                        <>
                                            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                            <Nav.Link as={Link} to={"/register"}>Sing up</Nav.Link>

                                        </>
                                    )}
                                </Nav>    
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 
                </div>
                <div>
                    <Switch>
                        <Route path="/home">
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
                        <Route path="/Ulubione">
                            <Bookmarks/>
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
                        <Route path="/user">
                            <BoardUser/> 
                        </Route>
                        <Route path="/mod">
                            <BoardModerator/>
                        </Route>    
                        <Route path="/admin">
                            <BoardAdmin/>
                        </Route>
                    </Switch>
                </div>
        </Router>

        )
    }
}