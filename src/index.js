import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from './store/provider';
import MainDisplay from './components/mainDisplay';
import Home from './components/Home';
import './components/stylesheets/reset.css'
import './index.css';

class App extends React.Component{
  state={
    userLoggedIn: false
  }

  logUserIn = () => {
    this.setState({
      userLoggedIn: true
    }, () => {
      console.log("User lgoged in")
    })
  }

  render(){
    return(
      <>
          {
            this.state.userLoggedIn ?
            <Home />
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
