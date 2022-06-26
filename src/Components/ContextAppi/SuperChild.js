import React, {useContext} from 'react';
import {GlobalInfo}  from '../../App';

function SuperChild() {
    const{appcolor, getDay} = useContext(GlobalInfo);
    const day="Sunday";
  return (
    <div>
        <h1 style={{color:appcolor}}>SuperChild</h1>
        <button onClick={()=>getDay(day)}>click Me</button>
    </div>
  )
}

export default SuperChild;