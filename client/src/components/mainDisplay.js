import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
// import data from './data/loginData.json';

class MainDisplay extends React.Component{


    state={
        username: "",
        password: "",
        logInPage: true, /* if it is true, then the login component is rendered, if it is false, then the signUp component is rendered */
        uNameAvailable: true,
        hoverMenu: false
    }

    /* Function which handles the user login
        it takes 2 arguments, x is username and y is password  */
    handleLogIn = async (x,y) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x , password: y })
        };
        const response = await fetch('/api/loginUser', requestOptions);
        let serverResponse = await response.json();

        /* if user exists, then it triggers the function which logs in the user */
        serverResponse.userExist && 
        this.props.logUserIn(x)
    }


    /* Function that switches 
        the login page from 
        sign up page and vice-versa 
        by switching logInPage state 
        b/w true and false*/
    switchPage = () =>{
        this.setState({
            logInPage : !this.state.logInPage 
        })
    }

    handleSignUpUserName = async(x) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x })
        };
        const response = await fetch('/api/checkUserName', requestOptions);
        let serverResponse = await response.json();
        let flag = serverResponse.userNameAvailable; 
        console.log(flag)

        !flag ?
        this.setState({
            uNameAvailable: false
        })
        :
        this.setState({
            uNameAvailable: true
        })
    }

    registerUser = async(x , y) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x , password: y })
        };
        const response = await fetch('/api/signUpUser', requestOptions);
        let serverResponse = await response.json();
        serverResponse.userRegistered && 
            this.setState({
                logInPage : !this.state.logInPage,
                hoverMenu: true
            }, () => {
                setTimeout( function(){
                    this.setState({
                        hoverMenu: false
                    })
                }.bind(this), 3000)
            }) 
    }


    render(){
        return(
            <div className="pageWrapper">
                {/* If the logInPage state is true, it loads LogIn component
                    and if it is false, it loads signUp component */}
                {
                    this.state.logInPage ?
                        <LogIn handleLogIn = {this.handleLogIn} signUp = {this.switchPage} hoverMenu = {this.state.hoverMenu}  />
                        :
                        <SignUp checkUserName = {this.handleSignUpUserName} uNameAvailable = {this.state.uNameAvailable} registerUser = {this.registerUser} LogIn = {this.switchPage} />
                }
            </div>
        )
    }
}

export default MainDisplay;