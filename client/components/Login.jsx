import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hi bebes, please log in <3</h1>
                <form onSubmit={this.props.onSubmit}></form>
                <div>
                    
                </div>
            </div>
        )
    }
}