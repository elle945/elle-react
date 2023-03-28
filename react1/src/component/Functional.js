//SHORT COMMANDO ffc

const hello = 'FEU22'

const displayMessage = () => {
    return 'Vad kul det ska bli'
}

function Functional() {
    return (
        <>
            <h1 className="title">
                {' '}
                {hello + ' ' + displayMessage()} {1 + 1}
            </h1>
        </>
    )
}

export default Functional
