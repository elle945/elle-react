/*DEtta är en komponent med 2st props inhämtningar och 1 child props  */
function FunctionalPropsChildren(props) {
    return (
        <div>
            <h2>
                Detta är också en komponent som hämtar props, i detta fallet 2
                st
                {props.first}
                {props.last}
            </h2>
            {/* Children element menas att det ligger i ett p under ett h1 tex */}
            <p>{props.children}</p>
        </div>
    )
}

export default FunctionalPropsChildren
