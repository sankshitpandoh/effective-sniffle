import React from 'react';
import '../stylesheets/HomeMainDisplay.css'

class HomeMainDisplay extends React.Component{
    render(){
        return(
            <div className="home-main-display">
            <span>Welcome, </span>
            <h1>{this.props.user}</h1>
            </div>
        )
    }
}

export default HomeMainDisplay;