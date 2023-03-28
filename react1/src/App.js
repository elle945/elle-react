import './App.css'
//Importerar alla komponenter som ska visas nedan

//Functional Cpmponent med interpolering
import Functional from './component/Functional'
//Class component
import ClassComponent from './component/ClassComp'
//Function component med en props
import FunctionalProps from './component/FunctionalProps'
import FunctionalProps2 from './component/FunctionalProps2'
//Function component med 2 props och 1 children
import FunctionalPropsChildren from './component/FunctionalPropsChildren'
import ClassCompProps from './component/ClassCompProps'
/* Class component med state */
import StateCounterClass from './component/StateCounterClass'
//Functional component with state
import StateCounterFunction from './component/StateCounterFunction'
//Fucntional compnent with event
import FunctionEvent from './component/FunctionEvent'
import WeekTwo from './component/WeekTwo'
import ConditionalRendering from './component/ConditionalRendering'
import Conditionalrendering2 from './component/Conditionalrendering2'
import Conditionalrendering3 from './component/Conditionalrendering3'
import ListRendering from './component/ListRendering'
import ListRendering2 from './component/ListRendering2'
import ListRendering3 from './component/ListRendering3'
import ListRendering4 from './component/ListRendering4'
import FormHandling from './component/FormHandling'
import FormHandlingValidation from './component/FormHandlingValidation'
import Inline from './component/Inline'
import StyledComponents from './component/StyledComponents'

function App() {
    return (
        <div className="App">
            {/* Här skapade vi en fuctional component med interpolering */}
            <Functional />
            {/* Shift+alt+A gör kommentarer */}
            <ClassComponent />
            {/* Detta är en func props */}
            <FunctionalProps name=" Ja, det stämmer!" />
            {/*  */}
            <FunctionalProps2 first=" Elin" last=" Nilsson" />
            {/* Fuctional component with 2 och 1 child props */}
            <FunctionalPropsChildren
                first=" Elin"
                last=" Nilsson"
                children="Jag är ett barn"
            />
            {/* Class component with props */}
            <ClassCompProps text=" Class component med props " />
            <StateCounterClass />
            <StateCounterFunction />
            <FunctionEvent />
            <WeekTwo />
            <ConditionalRendering />
            <Conditionalrendering2 />
            <Conditionalrendering3 />
            <ListRendering />
            <ListRendering2 />
            <ListRendering3 />
            <ListRendering4 />
            <FormHandling />
            <FormHandlingValidation />
            <Inline />
            <StyledComponents />
        </div>
    )
}

export default App
