import React, { useState } from "react";
import "./registration.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [state, setState] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: ""
  });
  const history = useHistory();
  const log = e => {
    e.preventDefault();
    history.push("/Login");
  };
  const callApi = async e => {
    e.preventDefault();
    axios({
      url: "http://localhost:3000/signup",
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-type": "application/json",
        authorize: ""
      }
    }).then(result => {
      console.log(result.status);
    });
  };

  const handlechange = input => e => {
    e.preventDefault();
    setState({ [input]: e.target.value });
    console.log(state);
  };
  return (
    <div className="box">
      <form onSubmit={callApi}>
        <div className="items">
          <TextField
            id="1"
            label="Name"
            name="name"
            value={state.Name}
            onChange={handlechange("Name")}
          />
          <TextField
            id="2"
            label="Password"
            name="password"
            value={state.Password}
            onChange={handlechange("Password")}
          />
          <TextField
            id="3"
            label="Email"
            name="email"
            value={state.Email}
            onChange={handlechange("Email")}
          />
          <TextField
            id="4"
            label="Phone Number"
            name="phone"
            value={state.phone}
            onChange={handlechange("Phone")}
          />
        </div>
        <div className="submit">
          <Button variant="contained" color="primary">
            Register
          </Button>
          <Button variant="contained" color="primary" onClick={log}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
