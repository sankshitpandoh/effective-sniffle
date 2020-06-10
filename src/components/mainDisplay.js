import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import data from './data/loginData.json';

class MainDisplay extends React.Component{
    state={
        username: "",
        password: "",
        logInPage: true,
        uNameAvailable: true
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

    switchPage = () =>{
        this.setState({
            logInPage : !this.state.logInPage 
        })
    }

    handleSignUpUserName = (x) => {
        let flag = false
        for(let i = 0; i < data.length; i++){
            if(data[i].username === x){
                flag = true;
                break;
            }
        }
        flag ?
        this.setState({
            uNameAvailable: false
        })
        :
        this.setState({
            uNameAvailable: true
        })
    }

    registerUser = () => {
        console.log("successfully registered")
    }

    render(){
        return(
            <div className="pageWrapper">
                {
                    this.state.logInPage ?
                        <LogIn handleLogIn = {this.handleLogIn} signUp = {this.switchPage} />
                        :
                        <SignUp checkUserName = {this.handleSignUpUserName} uNameAvailable = {this.state.uNameAvailable} registerUser = {this.registerUser} />
                }
            </div>
        )
    }
}

export default MainDisplay;