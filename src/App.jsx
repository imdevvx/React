import "./App.css";

// Components
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

// Features
import TodoList from "./features/Todo/ToDoList";

// UI Examples
import { List } from "./features/UIExamples/List";
import { Click_Event2 } from "./features/UIExamples/ClickEvents";
import ColorPicker from "./features/UIExamples/ColorPicker";
import OnChange from "./features/UIExamples/OnChange";
import DigitalClock from "./features/UIExamples/DigitalClock";
import StopWatch from "./features/UIExamples/stopWatch";
import CounterApp, { UpdateArray, UpdateArrayObject, UpdateObject } from "./features/UIExamples/UpdaterFunction";
import Student from "./features/UIExamples/PropTypes1";
import UseEffect, { Window } from "./features/UIExamples/useEffect";
import { UseStateExample, UseRefExample } from "./features/UIExamples/2.2_useRef&useState";

function App() {
  return (
  
  <div className="app-container">

      {/* Components - Header */}
      <div className="section">
        <h2>My React website</h2>
        <Header />
      </div>

      {/* Components - Card */}
      <div className="section">
        <h2>Profile</h2>
        <Card />
      </div>

      {/* prop types */}
      <div className="section">
        <h2>Props Examples</h2>
        <Student name="Admin Dev" age={17} isStudent={true} />
      </div>

      {/* Lists */}
      <div className="section">
        <h2>Lists</h2>
        <List />
      </div>

      {/* On Change Events */}
      <div className="section">
        <h2>Form Handling</h2>
        <OnChange />
      </div>



      {/* Click Event */}
      <div className="section">
        <h2>Click Events</h2>
        <Click_Event2 />
      </div>

      {/* Use State and Ref*/}
      <div className="section">
        <h2>useState & useRef</h2>
        <UseStateExample />
        <UseRefExample />
      </div>

      <div className="section">
        <h2>Counter App; d = 4</h2>
        <CounterApp />
      </div>

      <div className="section">
        <h2>Updating state of an array</h2>
        <UpdateArray />
      </div>

      <div className="section">
        <h2>Updating state of an object</h2>
        <UpdateObject />
      </div>

      <div className="section">
        <h2>Updating state of an array of object</h2>
        <UpdateArrayObject />
      </div>

      <div className="section">
        <h2>UseEffect</h2>
        <UseEffect />
      </div>

      <div className="section">
        <h2>UseEffect window object</h2>
        <Window />
      </div>

      {/* Todo */}
      <div className="section">
        <h2>To Do List</h2>
        <TodoList />
      </div>

      {/* Color Picker */}
      <div className="section">
        <h2>Color Picker</h2>
        <ColorPicker />
      </div>

      {/* Clock */}
      <div className="section">
        <h2>Digital clock</h2>
        <DigitalClock />
      </div>

      {/* Stopwatch */}
      <div className="section">
        <h2>Stop watch</h2>
        <StopWatch />
      </div>




      <Footer />

    </div>

  );
}

export default App;



















/* Function App 12 */

// import './App.css'
// import StopwatchChatgpt from './assets/20_stopWatch'

// function App () {
//   return (
//     <>
//   <StopwatchChatgpt/>
//     </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 11 */

// import './App.css'
// import { UseRefExample, UseStateExample } from './assets/19.1_useRef&useState'
// import UseRef, { UseRef2 } from "./assets/19_useRef"

// function App () {
//   return (
//     <>
//     <UseRef/>
//     <UseRef2/>
//     <UseStateExample/>
//     <UseRefExample/>
//     </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 10 */

// import './App.css'
// import { ComponentA } from './assets/18.1_ComponentA'

// function App(){
//   return(
//   <>
//   <ComponentA/>
//   </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 9 */

// import './App.css'
// import DigitalClock from "./assets/17_DigitalClock"

// function App() {
//   return(
//     <>
//     <DigitalClock/>
//     </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 8 */

// import './App.css'
// import UseEffect, {Window} from './assets/16_useEffect'


// function App() {
//   return (
//     <>
//     <UseEffect/>
//     <Window/>
//     </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 7 */

// import './App.css'
// import ToDoList from './assets/15_ToDoList'

// function App() {
//   return (
//     <ToDoList/>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 6 */

// import './App.css'
// import CounterApp, {UpdateArray, UpdateObject, UpdateArrayObject} from './assets/13_UpdaterFunction'

// function App() {
//   return(
//   <>
//    <CounterApp/>
//    <UpdateObject/>
//    <UpdateArray/>
//    <UpdateArrayObject/>
//   </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 5 */

// import './App.css'
// import ColorPicker from './assets/12_ColorPicker'

// function App() {
//   return (<ColorPicker/>)
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 4 */

// import './App.css'
// import UseStates, {Counter} from './assets/10_UseStates'
// import OnChange from './assets/11_onChange'


// function App() {

//   return (
//     <>
//       <UseStates/>
//       <Counter/>
//       <OnChange/>
//     </>
// )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 3 */

// import './App.css'
// import Click_Events, { Click_Event2, ProfilePicture } from './assets/9_ClickEvents'

// function App() {

//   return (
//     <>
//       <Click_Events/>
//       <Click_Event2/>
//       <ProfilePicture/>
//     </>
//   )
// }

// export default App



// ----------------------------------------------------------------------------



/* Function App 2 */

// import './App.css'
// import List, { List2 } from './assets/8_List.jsx'

// function App() {

//   const foods = [{ id: 1, name: "bread", calories: "195" },
//   { id: 2, name: "rice", calories: 230 },
//   { id: 3, name: "chapati", calories: 210 },
//   { id: 4, name: "cury", calories: 110 },
//   { id: 5, name: "daal", calories: 190 }]

//   const vegetables = [{ id: 1, name: "Potatoes", calories: 15 },
//   { id: 2, name: "Onion", calories: 25 },
//   { id: 3, name: "Tomatoes", calories: 21 },
//   { id: 4, name: "Carrots", calories: 11 },
//   { id: 5, name: "Corn", calories: 19 }]

//   return (
//       <>
//         <List />
//         {foods.length > 0 ? <List2 items={foods} heading="Foods" /> : <List2 />}
//         {vegetables.length > 0 ? <List2 items={vegetables} heading="Vegetables" /> : <List2 />}
//       </>
//     )
//   }

// export default App



// ----------------------------------------------------------------------------



/* Function App 1 */

// import './App.css'
// import Button from './assets/5_Button.jsx'
// import Student, { Employee } from './assets/6_PropTypes1.jsx'
// import UserGreeting from './assets/7_PropTypes2.jsx'

// function App() {

//   return (
//       <>
//         <Button />
//         <Student name="Dev Codes" age={17} isStudent={true} /> 
//         <Employee name="Rahul" age={24} isEmployee={true} />
//         <Employee />
//         <UserGreeting isLoggedIn={true} username="syncdecodes" />
//       </>
//     )
//   }

// export default App