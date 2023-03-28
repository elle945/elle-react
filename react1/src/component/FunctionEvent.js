import React from 'react'

function FunctionEvent() {
    function clickEvent() {
        console.log('Du har klickat på knappen')
    }

    return (
        <div>
            {/* Du kan ej skriva clickEvent med paranteser för så kallas funktionen vid render */}
            <button onClick={clickEvent}>Event knapp </button>
        </div>
    )
}

export default FunctionEvent
