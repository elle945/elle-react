//SHORT COMMANDO ffc

const hello = 'FEU22'

const displayMessage = () => {
    return 'Nedanför är vecka'
}

function WeekTwo() {
    return (
        <>
            <h1 className="title">
                {' '}
                {hello + ' ' + displayMessage()} {1 + 1}
            </h1>
        </>
    )
}

export default WeekTwo
