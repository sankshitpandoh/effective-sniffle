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

  /* Function that provides the currentUser value in to state and 
    renders the home component with current user */
  logUserIn = (x) => {
    this.setState({
      userLoggedIn: true,
      currentUser: x
    }, () => {
      console.log("User logged in")
    })
  }

  /* Function that empties the current user state and 
    logs out the user */
  logOut = () => {
    this.setState({
      userLoggedIn: false,
      currentUser: ""
    })
  }

  render(){
    return(
      <>
          {/* If the user is looged in, 
          it loads the Home component with username of the user, 
          else it loads the Main display component */}
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
