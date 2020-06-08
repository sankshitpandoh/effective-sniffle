import React from 'react';
import './stylesheets/mainDisplay.css';
import LogIn from './LogIn';

class MainDisplay extends React.Component{
    render(){
        return(
            <div className="pageWrapper">
                <LogIn />
            </div>
        )
    }
}

export default MainDisplay;