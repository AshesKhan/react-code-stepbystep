import React, { useEffect, useState } from 'react'

const SecondUserEffect = (props) => {

    useEffect(()=>{
       alert("count. is"+ props.count)
    },[props.count,props.data])
  
  return (
    <div>
      <h1>UseEffect</h1>
      {/* <h1>Count :{count}</h1>
      <h1>Count :{data}</h1> */}
      {/* <button onClick={()=>setCount(count+1)}>Updated Count</button>
      <button onClick={()=>setData(data+1)}>Updated Data</button> */}
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </div>
  )
}

export default SecondUserEffect;