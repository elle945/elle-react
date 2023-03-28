import React from 'react'

function ListRendering3() {
    const persons = [
        {
            id: 1,
            name: 'Glenn',
            age: 43,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Blenn',
            age: 34,
            skill: 'Vue'
        }
    ]

    const personList = persons.map((person) => (
        <h2 key={person.id}>
            My name is:{person.name}
            My age is:{person.age}
            My skill is:{person.skill}
        </h2>
    ))
    return <div>{personList}</div>
}

export default ListRendering3
