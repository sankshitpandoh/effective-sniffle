import React from 'react';
import '../stylesheets/settings.css';

class Settings extends React.Component{
    state={
        showPassword: false
    }
    
    displayPassword = (e) => {
        e.persist();
        this.state.showPassword ?
        this.setState({
            showPassword: false
        }, () =>{
            e.target.previousSibling.type = "password";
        })
        :
        this.setState({
            showPassword: true
        }, () =>{
            e.target.previousSibling.type = "text";
        })
        // console.log(e.target.previousSibling.type)
    }

    render(){
        return(
            <div className="settings-main-display">
                <div className="password-change">
                    <h3>Change Password</h3>
                    <span>
                        Enter Old Password:
                        <input type="password" placeholder="old password here"/>
                    </span>
                    <span>
                        Enter New Password:
                        <input type="password" placeholder="new password here"/>
                        <button onMouseDown={this.displayPassword} onMouseUp={this.displayPassword}>Show</button>
                    </span>
                    <span>
                        Enter New Password Again:
                        <input type="password" placeholder="re enter new password here"/>
                        <button onMouseDown={this.displayPassword} onMouseUp={this.displayPassword}>Show</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Settings;