import React from 'react'

function SecondPassProps(props) {


  return (
    <div>
        <h1>SecondPassProps</h1>
        <button onClick={()=>props.data()}>Call data function</button>
    </div>
  )
}

export default SecondPassProps;