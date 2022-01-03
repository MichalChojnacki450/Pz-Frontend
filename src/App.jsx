import React,{Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import Navbar from "./components/navabar/Navbar"
import './App.css';
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps"

function Map() {
    return <GoogleMap 
    defaultZoom={14} 
    defaultCenter={{lat:51.10685899391002,lng:17.033597910161696}}
    />;  
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



class App extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            userName:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered={
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:3000/app/singup',registered)
            .then(response => console.log(response.data))
        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:'',
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div style={{width: '100vw', height:'100vw'}}>
        <WrappedMap 
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBU_X8LRvRvKLFFhPzz8fVHQJNXxC4X_XU'}
            loadingElement={<div style={{height:"100%"}}/>}
            containerElement={<div style={{height:"100%"}}/>}
            mapElement={<div style={{height:"100%"}}/>}
        />
    </div>
                {/* <div className='container'>
                    <div className='from-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='User Name'
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default App;