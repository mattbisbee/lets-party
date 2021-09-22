import React from "react";

const MyAccount = () => {
  return (
    <div className="container">
      <form action="login">
        <div className="Register">
          <h1>Create an Account</h1>
          <label>Username</label>
          <input
            type="username"
            class="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
          />
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </div>
      </form>

      <h2>My Account</h2>
      <form action="my account">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
