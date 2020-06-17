import React from 'react';
// import Context from '../store/context'; 
import './stylesheets/LogIn.css';

class LogIn extends React.Component{
    state={
        username: "",
        password: "",
    }
    
    /* sets the username state to what the 
        user is inputting in thr username box */
    handleUserName = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    /* sets the password state to what the 
        user is inputting in thr password box */
    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    /* Function that triggers log in 
        if the enter key is pressed */
    handleKeyDown = (e) => {
        e.key === 'Enter' &&
        this.login();
    }

    /* Function that validates whether the username and 
        password fields are not empty and then passes 
        those values to function that triggers login */
    login = () => {
        this.state.username.trim() !== "" &&
        this.state.password.trim() !== "" && 
        this.props.handleLogIn(this.state.username, this.state.password);
    }

    render(){
        return(
                <div className="log-in-container">
                {this.props.hoverMenu &&
                    <div
                    className={"message-container " + (this.props.incorrectLoginPassword ? 'error' : 'changed')}>
                        {this.props.incorrectLoginPassword ?
                            <p>Incorrect Login Credentials </p>
                            :
                            <p>Account sucessfully created, log in with your credentials</p>
                        }
                    </div>
                }
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