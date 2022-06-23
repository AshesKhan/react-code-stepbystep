import React, { useEffect, useState } from 'react';
import SecondUserEffect from './SecondUserEffect';
import {Button} from 'react-bootstrap';

const UseEffect = () => {
  const [data, setData]= useState(10);
  const [count, setCount]= useState(100);

  //   useEffect(()=>{
  //       console.log("called with data state")
  //   },[])
  //   useEffect(()=>{
  //     alert("count is" + count)
  // },[count])
  return (
    <div>
      <h1>UseEffect</h1>
      {/* <h1>Count :{count}</h1>
      <h1>Count :{data}</h1> */}
      <SecondUserEffect count={count} data={data}/>
      <Button onClick={()=>setCount(count+1)}>Updated Count</Button><br/><br/>
      <Button onClick={()=>setData(data+1)}>Updated Data</Button>
    </div>
  )
}

export default UseEffect;