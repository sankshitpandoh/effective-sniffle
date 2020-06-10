import React from 'react';
// import Context from '../store/context'; 
import './stylesheets/LogIn.css';

class LogIn extends React.Component{
    render(){
        return(
                    <div className="log-in-container">
                        <span>
                            Username:
                            <input type="name" value={this.props.username} />
                        </span>
                        <span>
                            Password:
                            <input type="password" value={this.props.password} />
                        </span>
                        <button onClick={this.props.login}>Log In</button>
                        <p>Don't have an account? <strong>Click here</strong> to sign up </p>
                    </div>
        )
    }
}

export default LogIn;