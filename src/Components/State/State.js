import React, {useState} from 'react';
import './State.css';

function State() {
 
    const [data, setData]= useState(0);
    function UpdateData(){
        setData(data +1)
    }

  return (
    <div className='App'>
    <div>{data}</div>
    <button onClick={UpdateData}>Update Data</button>
    </div>
  );
}

export default State;