import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './store/provider';
import MainDisplay from './components/mainDisplay';
import './components/stylesheets/reset.css'
import './index.css';

class App extends React.Component{
  render(){
    return(
      <>
        <Provider>
          <MainDisplay />
        </Provider>
      </>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
