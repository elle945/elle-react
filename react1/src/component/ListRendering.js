//rfce
import React from 'react'

function ListRendering() {
    const names = ['Elin', 'Adam', 'Eva', 'Josse']
    return (
    <div>
        { names.map((name) => (<h2>{name}</h2>))}
    </div>

    )
}

export default ListRendering
