import React, { Component } from 'react';
import ClassDispatcher from './ClassDispatcher'

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
                <ClassDispatcher state={this.state} />
            </div>
        );
    }
}

export default ClassComponent;