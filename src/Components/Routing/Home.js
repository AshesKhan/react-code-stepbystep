import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Home Page...</h1>
        <p>This is our Home Page of Our App </p>
        <p>This is our learing Time </p>
        <Link to="/about">Go to About Page</Link>
        <br/><br/>
        <button onClick={()=> navigate('/about')}>Goto About page</button>
        <br/><br/>
        <button>Goto Aboutoff page</button>
    </div>
  )
}

export default Home;