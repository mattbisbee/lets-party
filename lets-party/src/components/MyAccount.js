import React from "react";

const MyAccount = () => {
  return (
    <div id="myaccount" className="container">
      <form action="login">
        <div className="Register">
          <h1>Create an Account</h1>
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
          />
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>

      <h2>My Account</h2>
      <form action="my account">
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
