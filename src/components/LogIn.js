import React from 'react';
// import Context from '../store/context'; 
import './stylesheets/LogIn.css';

class LogIn extends React.Component{
    state={
        username: "",
        password: "",
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

    handleKeyDown = (e) => {
        e.key === 'Enter' &&
        this.login();
    }

    login = () => {
        this.state.username.trim() !== "" &&
        this.state.password.trim() !== "" && 
        this.props.handleLogIn(this.state.username, this.state.password)
    }

    render(){
        return(
                    <div className="log-in-container">
                    <h1>Log In </h1>
                        <span>
                            Username:
                            <input type="text" value={this.state.username} onChange={this.handleUserName} placeholder="Enter Username here" />
                        </span>
                        <span>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.handlePassword} onKeyDown={this.handleKeyDown} placeholder="Enter password here"/>
                        </span>
                        <button onClick={this.login}>Log In</button>
                        <p>Don't have an account? <strong onClick={this.props.signUp}>Click here</strong> to sign up </p>
                    </div>
        )
    }
}

export default LogIn;