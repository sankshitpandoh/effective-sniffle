import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';

class MainDisplay extends React.Component{
    state={
        username: "",
        password: "",
    }
    handleLogIn = () =>{

    }
    render(){
        return(
            <div className="pageWrapper">
                <LogIn username = {this.username} password = {this.password} login = {this.handleLogIn} />
            </div>
        )
    }
}

export default MainDisplay;