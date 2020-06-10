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
        }, () => {
            this.props.checkUserName(this.state.username)
        })
    }

    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        }, () => {
            this.checkPasswords()
        })
    }

    handleRePassword = (e) => {
        this.setState({
            rePassword : e.target.value
        },() => {
            this.checkPasswords()
        })
    }
    checkPasswords = () => {
        this.state.password === this.state.rePassword ?
        this.setState({
            disabled: false
        })
        :
        this.setState({
            disabled: true
        })
    }

    signUp = () => {
        this.state.username.trim() !== "" &&
        this.state.password.trim() !== "" && 
        this.state.rePassword.trim() !== "" &&
        this.props.registerUser()
    }

    render(){
        return(
            <div className="sign-up-container">
                <span>
                    Enter a Username: {!this.props.uNameAvailable && <p>username not available</p>}
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
                <button disabled={this.state.disabled || !this.props.uNameAvailable} onClick={this.signUp}>Sign Up</button>
            </div>
        )
    }
}

export default SignUp;