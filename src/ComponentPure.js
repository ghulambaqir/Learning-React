import React, { Component } from 'react'
import ChildPureComponent from './ChildPureComponent';

export default class pureComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <h1>Pure Component in React</h1>
                <ChildPureComponent count={this.state.count} />
                <button onClick={() => this.setState({ count: 1 })}>Update Count</button>
            </div>
        )
    }
}
