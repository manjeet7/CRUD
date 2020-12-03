import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home() {
  const history = useHistory();
  const register = () => {
    history.push("/");
  };
  const update = name => {};
  const callApi = async e => {
    e.preventDefault();
    axios({
      url: "http://localhost:3000/list",
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorize: ""
      }
    }).then(result => {
      {
        Map.result(res => (
          <div className="profile">
            <h1>{res.Name}</h1>
            <h2>{res.Email}</h2>
            <h2>{res.Phone}</h2>
            <div className="update">
              <Button
                variant="contained"
                color="primary"
                onClick={update(res.name)}
              >
                update
              </Button>
              <Button variant="contained" color="primary" onClick={update}>
                delete
              </Button>
            </div>
          </div>
        ));
      }
    });
  };

  return (
    <div className="home">
      <Button variant="contained" color="primary">
        List of Users
      </Button>
      <Button variant="contained" color="primary" onClick={register}>
        Register
      </Button>
    </div>
  );
}

export default Home;
