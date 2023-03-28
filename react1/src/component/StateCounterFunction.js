import React, { useState } from 'react'

// const Counterfunction () => {} ES6 fucntion

function CounterFunction() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>
                I denna function använder vi useState och du har klikcat {count}
            </h4>
            <button onClick={() => setCount(count + 1)}> öka värdet</button>
        </div>
    )
}

export default CounterFunction
