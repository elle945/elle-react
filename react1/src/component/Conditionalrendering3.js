import React, { Component } from 'react'

export class Conditionalrendering3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn ? (
            <div>
                <h2>Välkommen Elin</h2>
            </div>
        ) : (
            <div>
                <h2>Välkommen Gäst</h2>
            </div>
        )
    }
}

export default Conditionalrendering3
