import React from 'react'

function Props(props) {

        console.warn(props.name)

  return (
    <div style={{backgroundColor:"red", color:"white"}}>
      <h1>Welcome {props.name}</h1>
      {/* <h2>Welcome {props.email}</h2>  */}
    </div>
  )
}

export default Props