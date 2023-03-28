// rce
import React, { Component } from 'react'

class ConditionalRendering extends Component {
    /* rconst skpaar constructor och state */
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        /* Ren javascript */
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Välkommen Elin</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Välkommen Gästen</h2>
                </div>
            )
        }
    }
}

export default ConditionalRendering
