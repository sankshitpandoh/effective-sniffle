import React from 'react';
import '../stylesheets/HomeRightBar.css'

const navOptions = ["Home", "Settings", "LogOut"];

class HomeRightBar extends React.Component{
    render(){
        const items = navOptions.map((x, index) => {
            return this.props.activeOption === index ?
                <div key={index} className = "single-option active-option">
                    <h3>{x}</h3>
                </div>
                :
                x === "LogOut" ?
                <div onClick={this.props.logOut} key={index} className = "single-option">
                    <h3>{x}</h3>
                </div>
                :
                <div onClick={() => {this.props.makeActive(index)}} key={index} className = "single-option">
                    <h3>{x}</h3>
                </div>
        })
        return(
            <div className="right-bar-container">
                {items}
            </div>
        )
    }
}

export default HomeRightBar;