import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline styling</h1>
            <p className='blue'>Jag är styled på vanligtvis</p>
        </div>
    )
}

export default Inline
