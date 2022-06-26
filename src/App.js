// import logo from './logo.svg';
// import User from './Components/MapFunction/User';
// import MapFunction from './Components/MapFunction/MapFunction';
// import PassProps from './Components/PassFunctionProps/PassProps';
// import SecondPassProps from './Components/PassFunctionProps/SecondPassProps';
// import Login from './Components/BasicFormValidation/Login';
// import BasicForm from './Components/BasicForm/BasicForm';
// import IfCondition from './Components/ConditionalRendering/IfCondition';
// import HideandShow from './Components/HideandShow/HideandShow';
// import InputBox from './Components/InputBox/InputBox';
// import ClickEvent from './Components/CliclkEvent/ClickEvent';
// import State from './Components/State/State';
// import Effect from './Components/useEffectCondition/UseEffect';
//Routing
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import About from './Components/Routing/About';
// import Home from './Components/Routing/Home';
// import NavBar from './Components/Routing/NavBar';
// import Page404 from './Components/Routing/Page404';
// import User from './Components/Routing/User';

import React,{createContext, useState} from 'react'
import Child from "./Components/ContextAppi/Child";
import OtherChild from './Components/ContextAppi/OtherChild';

export const GlobalInfo = createContext();


function App() {
const[color, setColor] = useState('green');
const [day, setDay] = useState('Monday')
const getday=(item)=>{
  console.warn(item)
  setDay(item)
}

  return (
    <GlobalInfo.Provider value={{appColor:color, getDay:getday}}>
    <div className="App">
      <h1>App Component : {day}</h1>
    <Child/>
    <OtherChild/>


    


      {/* Routing */}
      {/* <BrowserRouter>
     <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:name" element={<User/>} />
      <Route path="/*" element={<Navigate to= "/" />} />
      <Route path='/*' element={<Page404 />} />
      </Routes>
      </BrowserRouter> */}



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
   {/* <MapFunction/> */}
   {/* <User alert={parentAlert}/> */}
   {/* <User/> */}
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;

















  // function parentAlert(data)
  // {
  //   alert(data)
  // }



  // Parent to Child
  // let data = "Ashes Khan"

  // function getData(){
  //   alert("hello from app")
  // }


//----------------------------------

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