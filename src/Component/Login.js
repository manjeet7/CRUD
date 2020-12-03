import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    Name: "",
    Password: ""
  });
  const history = useHistory();

  const callApi = async e => {
    e.preventDefault();
    axios({
      url: "http://localhost:3000/login",
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        authorize: ""
      }
    }).then(result => {
      if (result.status == 200) {
        history.push("/Home");
      }
    });
  };

  const handlechange = input => e => {
    setUser({ [input]: e.target.value });
  };
  return (
    <div className="login">
      <form onSubmit={callApi}>
        <div className="items">
          <TextField
            id="1"
            label="Name"
            name="name"
            value={user.Name}
            onChange={handlechange("Name")}
          />
          <TextField
            id="2"
            label="Password"
            name="password"
            value={user.Password}
            onChange={handlechange("Password")}
          />
        </div>
        <div className="submit">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
