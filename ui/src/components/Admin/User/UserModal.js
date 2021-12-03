import React, { useState, useEffect } from "react";
import { Modal, FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LoadingButton from "../../Fancy/LoadingButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const UserManagement = ({ show, setShow, user, reRender, setReRender }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [password, setPassword] = useState(user.password);
  const [accessLevel, setAccessLevel] = useState(user.accessLevel);

  const [roles, setRoles] = useState([]);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  // need to load roles from database using axios
  useEffect(() => {
    console.log("show", show);
  }, [show]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8080/get-roles",
      headers: {},
    };

    let fetchedRoles = [];

    axios(config)
      .then((response) => {
        response.data.map((role) => {
          fetchedRoles.push(role.role);
          setRoles(roles.concat(role.role));
        });
      })
      .then(() => {
        setRoles(fetchedRoles);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("roles", roles);
  }, []);

  const renderedRole = roles.map((role) => {
    return (
      <option value={role}>
        {role.charAt(0) + role.slice(1).toLowerCase()}
      </option>
    );
  });

  const sendUpdate = () => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    data.append("username", username);
    data.append("password", password);
    data.append("Email", email);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("other", user.other);
    data.append("accessLevel", accessLevel);

    var config = {
      method: "put",
      url: "http://localhost:8080/user-management",
      headers: {},
      params: {
        UserID: user.userId,
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response);
        setReRender(!reRender);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Email"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            mapRoles
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Access Level">
          <Form.Select
            aria-label="Floating label select example"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
          >
            {renderedRole}
          </Form.Select>
        </FloatingLabel>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <LoadingButton handleClose={handleClose} request={sendUpdate}>
            Save Changes
          </LoadingButton>
          {/* <Button variant="primary" onClick={console.log("yo")}>
            Confirm
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserManagement;
