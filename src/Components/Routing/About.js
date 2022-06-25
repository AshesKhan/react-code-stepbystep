import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <div>
        <h1>About Page</h1>
        <p>This is our About Us Page of Our App </p>
        <p>This is our learing Time </p>
        <Link to="/">Go to About Page</Link>
        <li><Link to="/user/ashes">Ashes</Link></li>
        <li><Link to="/user/khan">Khan</Link></li>
    </div>
  )
}

export default About