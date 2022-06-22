import React, { useState } from "react";

function Login() {
    const [user, setUser]=useState()
   function loginHandle(e)
    {
        e.preventDefault()
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter user Id" />
        <br />
        <br />
        <input type="password" placeholder="Enter user password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
