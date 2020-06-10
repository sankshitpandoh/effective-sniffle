import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import data from './data/loginData.json';

class MainDisplay extends React.Component{
    state={
        username: "",
        password: "",
        currentPage: "login"
    }

    handleLogIn = (x,y) =>{
        let userExist = false;
        for(let i = 0; i < data.length; i++){
            if(data[i].username === x && data[i].password === y  ){
                userExist = true;
                break;
            }
        }
        userExist && 
        this.props.logUserIn()
    }

    handleUserName = (e) =>{
        this.setState({
            username: e.target.value
        },() =>{
            console.log(this.state.username)
        } )
    }
    
    render(){
        return(
            <div className="pageWrapper">
                {
                    this.state.currentPage === "login" ?
                        <LogIn handleLogIn = {this.handleLogIn} />
                        :
                        <SignUp />
                }
            </div>
        )
    }
}

export default MainDisplay;