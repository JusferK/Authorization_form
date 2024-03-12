import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const authorizedTextOrNot = ['Contact', 'Enter the Password'];

  const login = (
    <form action="#" onSubmit={handleSubmit}>
        <input type="password" placeholder="Password" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  );

  return (
      <div id="authorization">
        <h1>{authorized ? authorizedTextOrNot[0] : authorizedTextOrNot[1]}</h1>
        {authorized ? contactInfo : login}
      </div>
  );
}

export default Contact;