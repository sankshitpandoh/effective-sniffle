import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';

class MainDisplay extends React.Component{


    state={
        username: "",
        password: "",
        logInPage: true, /* if it is true, then the login component is rendered, if it is false, then the signUp component is rendered */
        uNameAvailable: true,
        hoverMenu: false,
        incorrectLoginPassword: false
    }

    /* Function which handles the user login
        it takes 2 arguments, x is username and y is password  */
    handleLogIn = async (x,y) =>{

        /* making a POST request to server with username and password */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x , password: y })
        };
        const response = await fetch('/api/loginUser', requestOptions);
        let serverResponse = await response.json();

        /* if user exists, then it triggers the function which logs in the user */
        serverResponse.userExist ?
        this.props.logUserIn(x)
        :
        /* else shows an message with invalid credentials */
        this.setState({
            hoverMenu: true,
            incorrectLoginPassword: true
        }, () => {
            /* removing the error message after 3 seconds */
            setTimeout( function(){
                this.setState({
                    hoverMenu: false,
                    incorrectLoginPassword: false
                })
            }.bind(this), 3000)
        })
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

    /* function that checks if the username is available while new user
     signing up, that is, 
     it is not used before */
    handleSignUpUserName = async(x) => {
        /* making a POST request with the username entered by user on signing up */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x })
        };
        const response = await fetch('/api/checkUserName', requestOptions);
        let serverResponse = await response.json();
        let flag = serverResponse.userNameAvailable; 

        /* if user name is not available,
         it changed the state to false 
         else it changed it to true */
        !flag ?
        this.setState({
            uNameAvailable: false
        })
        :
        this.setState({
            uNameAvailable: true
        })
    }

    /* function that registers a new user to database */
    registerUser = async(x , y) => {

        /* making a post request to server with new user credentials */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: x , password: y })
        };
        const response = await fetch('/api/signUpUser', requestOptions);
        let serverResponse = await response.json();

        /* if the user is successfully registered,
         takes user back to login page and
         displays success message */
        serverResponse.userRegistered && 
            this.setState({
                logInPage : !this.state.logInPage,
                hoverMenu: true
            }, () => {
                /* hides success message after 3 seconds */
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
                        <LogIn handleLogIn = {this.handleLogIn} signUp = {this.switchPage} hoverMenu = {this.state.hoverMenu} incorrectLoginPassword = {this.state.incorrectLoginPassword} />
                        :
                        <SignUp checkUserName = {this.handleSignUpUserName} uNameAvailable = {this.state.uNameAvailable} registerUser = {this.registerUser} LogIn = {this.switchPage} />
                }
            </div>
        )
    }
}

export default MainDisplay;