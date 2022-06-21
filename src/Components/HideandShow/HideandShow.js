import React from "react";

function HideandShow() {
    const [status, setStatus] = React.useState(true)

  return (
    <div>
        <h1>Hide and Show</h1>
        {
            status?<h1>Ashes khan</h1>:null
        }
      
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default HideandShow;
