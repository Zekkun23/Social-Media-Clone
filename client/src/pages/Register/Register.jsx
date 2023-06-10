import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  // State variables to store form inputs and error message
  const [inputs, setInputs] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  // Event handler for input changes
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Event handler for form submission
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to register the user
      await axios.post("http://localhost:3307/api/auth/register", inputs);
    } catch (err) {
      // Set the error message if registration fails
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">{/* Content for the left section */}</div>
        <div className="right">
          {/* Content for the right section */}
          <h1>Welcome to Social Sphere!</h1>
          <div className="bottom">
            <span>Already have an account? </span>
            <Link to="/Login">Login</Link>
          </div>
          <h1>Register</h1>
          <form>
            {/* Form fields */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {/* Display the error message if it exists */}
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
