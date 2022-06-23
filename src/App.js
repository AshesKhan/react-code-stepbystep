// import logo from './logo.svg';
import './App.css';
import MapFunction from './Components/MapFunction/MapFunction';
// import PassProps from './Components/PassFunctionProps/PassProps';
// import SecondPassProps from './Components/PassFunctionProps/SecondPassProps';
// import Login from './Components/BasicFormValidation/Login';
// import BasicForm from './Components/BasicForm/BasicForm';
// import IfCondition from './Components/ConditionalRendering/IfCondition';
// import HideandShow from './Components/HideandShow/HideandShow';
// import InputBox from './Components/InputBox/InputBox';
// import ClickEvent from './Components/CliclkEvent/ClickEvent';
// import State from './Components/State/State';
// import Effect from './Components/useEffectCondition/UseEffect'



function App() {

  // function getData(){
  //   alert("hello from app")
  // }

  return (
    <div className="App">
   {/* <ClickEvent/> */}
   {/* <State/> */}
   {/* <InputBox /> */}
   {/* <HideandShow /> */}
   {/* <BasicForm /> */}
   {/* <IfCondition /> */}
   {/* <Login/> */}
   {/* <PassProps data={getData}/>
   <PassProps data={getData}/>
   <div style={{float:'right'}}>
    <SecondPassProps data={getData}/>
   </div> */}
   {/* <Effect/> */}
   <MapFunction/>
    </div>
  );
}

export default App;





















// import React from 'react';
// import Props from './Components/Props/Props';
// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState("Khan")

//   return (
//     <div className="App">
//       <h1>Props in React</h1>
//       <Props name={name}/>
//       <button onClick={() => {setName("Ashes")}}>update Name</button>
//       {/* <Props name={"Khan"} email="khan@gmail.com"/>
//       <Props name={"Khattak"} email="khattak@gmail.com"/> */}
//     </div>
//   )
// }

// export default App