import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from './store/provider';
import MainDisplay from './components/mainDisplay';
import Home from './components/Home';
import './components/stylesheets/reset.css';
import './components/stylesheets/font-face.css'
import './index.css';

class App extends React.Component{
  state={
    userLoggedIn: false,
    currentUser: ""
  };

  logUserIn = (x) => {
    this.setState({
      userLoggedIn: true,
      currentUser: x
    }, () => {
      console.log("User logged in")
    })
  }
  logOut = () => {
    this.setState({
      userLoggedIn: false,
      currentUser: ""
    })
  }

  render(){
    return(
      <>
          {
            this.state.userLoggedIn ?
            <Home user = {this.state.currentUser} logOut = {this.logOut} />
            :
            <MainDisplay logUserIn = {this.logUserIn} />
          }
      </>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
