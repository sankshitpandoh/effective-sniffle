import React from 'react';
import Context from './context';

class Provider extends React.Component{
    state={
        username: "",
        password: "",
    }
    render(){
        return(
            <Context.Provider value ={ {username: this.state.username} , {password : this.state.password}} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;