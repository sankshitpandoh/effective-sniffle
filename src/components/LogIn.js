import React from 'react';
import Context from '../store/context';
import './stylesheets/LogIn.css';

class LogIn extends React.Component{
    render(){
        return(
            <Context.Consumer>
                {context => (
                    <div className="log-in-container">
                        <span>
                            Username:
                            <input type="name" value={context.username} />
                        </span>
                        <span>
                            Password:
                            <input type="password" value={context.password} />
                        </span>
                        <button>Log In</button>
                        <p>Don't have an account? <strong>Click here</strong> to sign up </p>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default LogIn;