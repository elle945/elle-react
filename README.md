# elle-react

REACT JS
UI libary - not a framwork
Sidor som använder react blir snabbare är enbart html,css,javascript

cd project-name
npm start
index.js importerat som main.js
app.js

React-component
function App() {
return <div> Hello World!

}
export default App- alltid stor bokstav.

React-component
function App() {
return (

 <div> Hello World!
 <p> Hello World!
)
}

## För att skriva fler

React motsvarighet till v-bind

function App() {
const s = 'hello-world'
return <div>{s} Hello World!

}

props = delar info mellan komponenter

function CounterButton(props) {
return {
<input type="button" value={props.value} />

export default

---

}
}

<div id="main"></div>

document.querySelector("#main")

---

import { component } from "react";
class Message extends Component {
render(){
return <h1> HEJ</h1>;
}
}

Shortcommando
FFC - functional component

---

Välkommen till Fullstack kursen 2023!

Installation: Det finns 2 st metoder att installera React på:

Via att skriva i terminalen "npx create-react-app my-project" (my-project är bara ett namn, kan ändras till vadsomhelst) Här använder vi oss av Reacts egna installation. I denna ingår det mesta för att kunna arbeta men installationen är långsam och eventuella ändringar tar en liten stund

Via att skriva i terminalen "npm create vite". Därefter följa installationsanvisningarna. Välj:

React
Javascript
Här finns en bra guide, följ gärna denna: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite

//Interpolering Skrivs {} och ej som i vue "{{}}" Data som inhämtas kommer från en variabel eller en funktion med en return

//Komponenter Precis som i Vue eller andra ramverk så byggs "app" upp av flera komponenter Det finns 2 komponent typer:

Functional Components (skrivs som en vanlig funktion med return)
Class Components (använd render())
//Props vs State Props är objekt som innehåller information för att kontrollera beteendet hos en komponent Problemet med props är att de är oföränderliga State(tillståndet) är också ett objekt som innehåller viss information som kan ändras under komponentens livstid

Props:

Skickas till komponenten
Props är oföränderliga
Props kan nås som "rekvisita" eller "this.props"
De är som parametrar som skickas till en funktion
State:

Ingår i komponenten
State kan ändras
Funktionell: "useState" Hook
Class: "this.state"
De är som variabler som deklareras i "bodyn"
Events: Vad som menas med Event har ni nu redan koll på från Native JS och Vue kursen.

-----------Week2
useEffect är en React-hook som används för att utföra asynkrona uppgifter eller hantera sidans livscykel. Det används vanligtvis för att uppdatera tillståndet i en komponent efter att den har renderats eller för att prenumerera på och avsluta prenumerationen på en datakälla. useEffect körs automatiskt varje gång en komponent renderas, och det är därför ett användbart verktyg för att uppdatera användargränssnittet med nya data eller prenumerationsuppdateringar.

------------app.js------
 