import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function About() {
    const msg = useContext(UserContext)
    return (
        <div>
            <h1> {msg}</h1>
            About
        </div>
    )
}

export default About
