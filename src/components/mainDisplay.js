import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import fs from 'fs';
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
        // fs.readFile('./data/loginData.json', function (err, OldData) {
        //     let dataArray = JSON.parse(OldData);
        //     console.log(dataArray)
        //     dataArray.push(data);
        //     // console.log(JSON.stringify(dataArray))    
        //     fs.writeFile("./data/data.json", JSON.stringify(dataArray), function(err){
        //       if (err) throw err;
        //       console.log('The user was ');
        //     });
        // })  
    }

    render(){
        return(
            <div className="pageWrapper">
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