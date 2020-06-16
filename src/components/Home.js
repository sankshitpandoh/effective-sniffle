import React from 'react';
import './stylesheets/Home.css'
import HomeRightBar from './homeComponents/HomeRightBar';
import HomeMainDisplay from './homeComponents/HomeMainDisplay';
import Settings from './homeComponents/settings';

class Home extends React.Component{
    state={
        activeOption: 0
    }
    makeActive = (x) =>{
        this.setState({
            activeOption: x
        })
    }
    render(){
        return(
            <div className="home-container">
            {this.state.activeOption === 0 &&
                <HomeMainDisplay user = {this.props.user} />
            }
            {this.state.activeOption === 1 &&
                <Settings user = {this.props.user} />
            }
            <HomeRightBar activeOption={this.state.activeOption} logOut = {this.props.logOut} makeActive = {this.makeActive} />
            </div>
        )
    }
}

export default Home;