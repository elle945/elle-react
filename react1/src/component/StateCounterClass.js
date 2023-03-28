//Utan måsvingar så hämtar den ifrån mappen, och i detta fallet importerar ja ifrån react
import { Component } from 'react'

class StateCounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    // Skapar en  funktion som loggar varje knapptryck
    increment() {
        console.log(this)

        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <h4>
                    I denna komponent använder vi setState i en klasskomponent
                    och värder är :{this.state.counter}
                </h4>
                {/* Knappen avvaktar att ringa på funktionen förän knappen blivit klickad. Viktigt när man jobbar i klasser */}
                <button onClick={() => this.increment()}>Öka värdet</button>
            </div>
        )
    }
}
export default StateCounterClass
