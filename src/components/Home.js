import React from 'react';
import './stylesheets/Home.css'
import HomeRightBar from './homeComponents/HomeRightBar';
import HomeMainDisplay from './homeComponents/HomeMainDisplay';

class Home extends React.Component{
    state={
        activeOption: 0
    }
    render(){
        return(
            <div className="home-container">
            <HomeMainDisplay user = {this.props.user} />
            <HomeRightBar activeOption={this.state.activeOption} logOut = {this.props.logOut} />
            </div>
        )
    }
}

export default Home;