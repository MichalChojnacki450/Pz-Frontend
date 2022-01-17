import React,{Component} from "react";
import AuthService from "../services/auth.service";
import Axios from "axios";


export default class Button extends Component{
    
    constructor(props){
        super(props);
        this.handelAddFav = this.handelAddFav.bind(this);
        
        this.state={
            currentUser: undefined,
            url:`http://localhost:8080`
        };
    }
    componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }
    handelAddFav(){
      const user = JSON.parse(localStorage.getItem('user'))
      console.log({
        email:this.props.email.email,
        firma:this.props.firma,
        token:user.accessToken
      })
      return Axios.post(this.url,{headers:{"x-access-token":user.accessToken}
    },{
        email:this.props.email.email,
        firma:this.props.firma, 
      });
    }
    render(){
        const { currentUser} = this.state;
        
        return(
            <div>
                {currentUser?(
                    <button onClick={this.handelAddFav}>
                        Like
                    </button>
            ):(<></>)}
            </div>
        )
    }
}