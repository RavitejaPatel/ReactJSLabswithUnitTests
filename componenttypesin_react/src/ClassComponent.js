import React, { Component } from 'react';

class ClassComponent extends Component {
    state =
        {
            name: "Robin",
            country: "Netherlands",
            language: "spanish"
        }
    render() {
        return (
            <div>
                <p>This message from state component</p>
                {this.state.name}
            </div>
        );
    }
}

export default ClassComponent;