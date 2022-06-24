import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
        <h1>Home Page...</h1>
        <p>This is our Home Page of Our App </p>
        <p>This is our learing Time </p>
        <Link to="/about">Go to About Page</Link>
    </div>
  )
}

export default Home;