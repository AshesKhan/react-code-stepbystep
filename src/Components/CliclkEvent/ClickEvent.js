import React from 'react';
import './ClickEvent.css';

function ClickEvent() {
    function apple()
    {
      alert("Ashes");
    }
    return (
      <div className="App">
       <h1>Khan</h1>
       <button onClick={apple}>Click Me</button>
      </div>
    );
  }
  

export default ClickEvent;