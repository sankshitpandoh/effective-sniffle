import React from 'react';
import '../stylesheets/settings.css';

class Settings extends React.Component{
    state={
        oldPassword: "",
        newPassword: "",
        reNewPassword: "",
        showPassword: false,
        disabled: true,
        pMatch: true
    }

    handleOldPassword = (e) => {
        this.setState({
            oldPassword : e.target.value
        }, () => {
            this.checkPasswords()
        })
    }

    handleNewPassword = (e) => {
        this.setState({
            newPassword : e.target.value
        }, () => {
            this.checkPasswords()
        })
    }

    handleReNewPassword = (e) => {
        this.setState({
            reNewPassword : e.target.value
        },() => {
            this.checkPasswords()
        })
    }
    
    checkPasswords = () => {
        /* TODO:
        Make button disabled if old password has not been entered */
        this.state.newPassword === this.state.reNewPassword ?
        this.setState({
            disabled: false,
            pMatch: true
        })
        :
        this.setState({
            disabled: true,
            pMatch: false
        })
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
                        <input type="password" value={this.state.oldPassword} onChange={this.handleOldPassword} placeholder="old password here"/>
                    </span>
                    <span>
                        Enter New Password:
                        <input type="password" value={this.state.newPassword} onChange={this.handleNewPassword} placeholder="new password here"/>
                        <button onMouseDown={this.displayPassword} onMouseUp={this.displayPassword}>Show</button>
                    </span>
                    <span>
                        Enter New Password Again: {!this.state.pMatch && <p>Passwords don't match</p>}
                        <input type="password" value={this.state.reNewPassword} onChange={this.handleReNewPassword} placeholder="re enter new password here"/>
                        <button onMouseDown={this.displayPassword} onMouseUp={this.displayPassword}>Show</button>
                    </span>
                    <button disabled={this.state.disabled}>Update Password</button>
                </div>
            </div>
        )
    }
}

export default Settings;