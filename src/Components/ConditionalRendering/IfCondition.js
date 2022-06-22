import React, { useState } from "react";

function IfCondition() {
  const [loggedIn, setLoggedIn] = useState(3);

  return (
    <div>
      <h1>If Condition</h1>
      {loggedIn == 1 ? (
        <h1>Welcome Ashes</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome Khan</h1>
      ) : (
        <h1>Welcome Khattak</h1>
      )}
    </div>
  );
}

export default IfCondition;
