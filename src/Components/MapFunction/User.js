import React from 'react'

function User(props) {

  const data="Ashes Khan"



  return (
    <div>
      <h1>Data Child to Parent & Parent to Child</h1>
      <h1>--------------------------------------</h1>
        <h1>User Name : </h1>
        <button onClick={()=>props.alert(data)} >Click Me</button>


        {/* Parent to Child
        <h1>User Name : {props.name}</h1>
        <button>Click Me</button> */}
    </div>
  )
}

export default User