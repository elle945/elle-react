import React, { Component } from 'react'

class Conditionalrendering2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let message
        if (this.state.isLoggedIn) {
            message = (
                <div>
                    <h2>Välkommen Elin</h2>
                </div>
            )
        } else {
            message = (
                <div>
                    <h2>Välkommen Gäst</h2>
                </div>
            )
        }
        return <div>{message}</div>
    }
}

export default Conditionalrendering2
