import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/user/ashes">Ashes</Link></li>
        <li><Link to="/user/khan">Khan</Link></li>
    </ul>
    </div>
  )
}

export default NavBar;