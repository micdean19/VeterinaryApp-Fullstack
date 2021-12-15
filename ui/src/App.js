// You have to import any css or components to be used here
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useEffect, useState } from "react";
import { Form, Col, Container, Button } from "react-bootstrap";

// For example importing main
import Main from "./components/MainComponent";
import Logout from "./components/Admin/LogoutComponent";

// Using this because we are using router, we need to wrap everything
import { BrowserRouter } from "react-router-dom";

const h2syling = {
  color: "black",
  height: "3rem",
};

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    data.append("email", email);
    data.append("password", password);

    var config = {
      method: "post",
      url: "http://localhost:8080/login-management",
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
      })
      .catch((error) => {
        console.log(error);
        // just setting the user so we can see what a login looks like
        setUser("testing");
      });
  };

  // check if user is logged in
  if (user) {
    return (
      // App is only gonna load in main component
      // The main has 1 header and 1 bottom (that doesn't change)
      // But it's also going to have a "middle" that changes depending on use case (i.e. nav bar)
      <div className="App">
        <h1>{user.data}</h1>
        {/* Callign the main component */}
        <BrowserRouter>
          <Main user={user} setUser={setUser} />
        </BrowserRouter>
      </div>
    );
  }

  return (
    <Container fluid className="align-middle w-25">
      <div>
        <h2 className="mb-3 mt-3" style={h2syling}>
          Login
        </h2>
        <Form onSubmit={handleSubmit}>
          <Col xs="auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

// For App to be used in index.js
export default App;
