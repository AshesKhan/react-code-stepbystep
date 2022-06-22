import React, { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState();

  function getFormData(e) {
    console.warn(name,tnc,interest)
    e.preventDefault();
  }

  return (
    <div>
      <h1>BasicForm</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <select onChange={(event)=>setInterest(event.target.value)}>
          <option>select option</option>
          <option>Khan</option>
          <option>Khattak</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(event)=>setTnc(event.target.checked)} />
        <span>Accept </span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicForm;
