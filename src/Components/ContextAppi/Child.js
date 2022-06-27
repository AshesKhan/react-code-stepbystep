
import React, {useContext, useState} from 'react';
import {GlobalInfo} from '../../App';
import SuperChild from './SuperChild';

function Child() {
    const {appColor,data,setData} = useContext(GlobalInfo);
    const [input, setinput] = useState()
    console.warn("appcolor", appColor);

    const handle = ()=>{
      setData((res) =>[...res, input])

      console.log("clicked")
    }
    const list = data.map((item, index)=> <li key={index}>{item}</li>)


  return (
    <div>
        <h1  style={{color:appColor}}>Child Component</h1>
        <SuperChild/>
        <button onClick={handle}>onClick</button>
        <input onChange={e=>setinput(e.target.value)}/>
        <h1>{list}</h1>
        <h2>{input}</h2>
    </div>
    
  )
}

export default Child;