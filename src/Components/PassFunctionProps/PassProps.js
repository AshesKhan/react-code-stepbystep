import React from 'react'

function PassProps(props) {


  return (
    <div>
        <h1>PassProps</h1>
        <button onClick={()=>props.data()}>Call data function</button>
    </div>
  )
}

export default PassProps;