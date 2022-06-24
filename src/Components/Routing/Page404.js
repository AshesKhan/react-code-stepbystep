import React from 'react';
import {Link} from "react-router-dom";

function Page404() {
  return (
    <div>
        <h1>Page 404</h1>
        <p>this Url is not Present</p>
        <Link to="/">Go To Home page</Link>
    </div>
  )
}

export default Page404;