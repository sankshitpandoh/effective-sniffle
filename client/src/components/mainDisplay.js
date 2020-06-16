import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
// import fs from 'fs';
import data from './data/loginData.json';

class MainDisplay extends React.Component{


    state={
        username: "",
        password: "",
        logInPage: true, /* if it is true, then the login component is rendered, if it is false, then the signUp component is rendered */
        uNameAvailable: true,
    }

    /* Function which handles the user login
        it takes 2 arguments, x is username and y is password  */
    handleLogIn = (x,y) =>{
        let userExist = false;
        /* loops through the data file to check whether the user details are correct */
        for(let i = 0; i < data.length; i++){
            if(data[i].username === x && data[i].password === y  ){
                /* if user exists, it changes the value of userExist to true and breaks out of the loop */
                userExist = true;
                break;
            }
        }
        /* if user exists, then it triggers the function which logs in the user */
        userExist && 
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
        // fs.readFile('./data/loginData.json', function (err, OldData) {
        //     let dataArray = JSON.parse(OldData);
        //     console.log(dataArray)
        //     dataArray.push(data);
        //     // console.log(JSON.stringify(dataArray))    
        //     fs.writeFile("./data/logindata.json", JSON.stringify(dataArray), function(err){
        //       if (err) throw err;
        //       console.log('The user was ');
        //     });
        // })  
    }

    render(){
        return(
            <div className="pageWrapper">
                {/* If the logInPage state is true, it loads LogIn component
                    and if it is false, it loads signUp component */}
                {
                    this.state.logInPage ?
                        <LogIn handleLogIn = {this.handleLogIn} signUp = {this.switchPage} />
                        :
                        <SignUp checkUserName = {this.handleSignUpUserName} uNameAvailable = {this.state.uNameAvailable} registerUser = {this.registerUser} LogIn = {this.switchPage} />
                }
            </div>
        )
    }
}

export default MainDisplay;