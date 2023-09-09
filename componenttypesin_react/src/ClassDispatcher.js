import React, { Component } from 'react';

class ClassDispatcher extends Component {
    render() {
        return (
            <div>
                <div>this is class dispatcher:{JSON.stringify(this.props.state)}</div>
            </div>
        );
    }
}

export default ClassDispatcher;