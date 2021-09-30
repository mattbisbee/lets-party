import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const linkStyle = {
  textDecoration: "none",
  color: "blue",
};

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form action="login" onSubmit={handleFormSubmit}>
        <div className="Register">
          <br></br>
          <h1>Create an Account</h1>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              className="form-control"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              className="form-control"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="form-control"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              placeholder="Enter password"
              name="password"
              type="password"
              className="form-control"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
        <br></br>
        <Link to="/login" style={linkStyle}>
          Go to Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;