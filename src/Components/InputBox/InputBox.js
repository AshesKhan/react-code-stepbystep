// import { useState } from "react"
import React, { useState } from "react";

function InputBox() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="App">
      <h1>Get inBox value</h1>
      <input type="text" onChange={getData} /><br/><br/>
      <button onClick={() => setPrint(true)}>Print Data</button>
      {print ? <h1>{data}</h1> : null}
    </div>
  );
}

export default InputBox;
