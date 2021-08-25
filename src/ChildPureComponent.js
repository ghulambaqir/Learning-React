import React, { PureComponent } from 'react'

export default class ChildPureComponent extends PureComponent {
    render() {
        console.log("ChildPureComponent Rerendering");
        return (
            <div>
                <h1>Child PureComponent</h1>
                <h2>Count:{this.props.count}</h2>

            </div>
        )
    }
}



// Checking PureComponent as props to see if props are same then component rerencder or  not