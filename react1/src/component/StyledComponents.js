import React from 'react'
//Importerar styled components
import styled from 'styled-components'

function StyledComponents() {
    function testFunction() {
        return console.log('Hej')
    }
    function testFunction2() {
        return console.log('alla')
    }
    return (
        <div>
            <Wrap>
                <h1> Styled components </h1>
            </Wrap>
            <ButtonLeft onMouseOver={testFunction}>Hej</ButtonLeft>
            <ButtonRight onMouseOver={testFunction2}>Allihopa</ButtonRight>
        </div>
    )
}

export default StyledComponents

const Wrap = styled.div`
    background-color: yellowgreen;
    &:hover {
        background-color: red;
    }
`
const ButtonLeft = styled.button`
    background: transparent;
    border-radius: 3px;
    width: 20%;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    &:hover {
        background-color: grey;
    }
`
const ButtonRight = styled(ButtonLeft)`
    color: black;
`
