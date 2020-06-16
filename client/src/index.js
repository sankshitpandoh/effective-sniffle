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

    componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => console.log(res.express))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

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
