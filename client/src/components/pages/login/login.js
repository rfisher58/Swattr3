import React, {Component} from 'react';
import axios from "axios";
export default class Login extends Component{
    state = {
        username:"",
        password:""
    }
    handleChange = (event) =>{
        this.setState({
          [event.target.name]:event.target.value
        })
      }
      handleLogin = (event) =>{
          event.preventDefault();
          console.log(this.state)
      }
    render(){
        return(
            <div>
                <form>
                    <input name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input name="password" placeholder="password" onChange={this.handleChange}/>

                   <a href="http://localhost:8080/auth/github">Login In You Dick</a>
                </form>
            </div>
        )
    }
}