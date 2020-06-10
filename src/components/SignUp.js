import React from 'react';
import './stylesheets/signUp.css';

class SignUp extends React.Component{
    state={
        username: "",
        password: "",
        rePassword: "",
        disabled: true
    }

    handleUserName = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleRePassword = (e) => {
        this.setState({
            rePassword : e.target.value
        },() => {
            this.state.password === this.state.rePassword &&
            this.setState({
                disabled: false
            })
        })
    }

    signUp = () => {
        this.state.username.trim() !== "" &&
        this.state.password.trim() !== "" && 
        this.state.rePassword.trim() !== "" &&
        console.log("wer in")
    }

    render(){
        return(
            <div className="sign-up-container">
                <span>
                    Enter a Username:
                    <input type="text" value= {this.state.username} onChange={this.handleUserName} />
                </span>
                <span>
                    Enter Password:
                    <input type="password" value= {this.state.password} onChange={this.handlePassword} />
                </span>
                <span>
                    Re-Enter Password:
                    <input type="password" value= {this.state.rePassword} onChange={this.handleRePassword} />
                </span>
                <button disabled={this.state.disabled} onClick={this.signUp}>Sign Up</button>
            </div>
        )
    }
}

export default SignUp;