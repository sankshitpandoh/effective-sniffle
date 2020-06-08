import React from 'react';
import Context from './context';

class Provider extends React.Component{
    state={
        value: "hello"
    }
    render(){
        return(
            <Context.Provider value ={ {value: this.state.value}} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;