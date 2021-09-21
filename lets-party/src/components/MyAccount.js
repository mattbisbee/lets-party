import React from "react";

const MyAccount = () => {
  return (
    <div className="Account">
      <div className="Register">
        <h1>Create an Account</h1>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text"></input>
        <button>Create</button>
      </div>
      <div className="Login">
        <h1>Log In</h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button>Log in</button>
      </div>
    </div>
  );
};

export default MyAccount;
