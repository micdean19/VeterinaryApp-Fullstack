import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Animal from "../AnimalComponent";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AnimalItem = ({ animal, setSelectedAnimal, reRender, setReRender }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const ButtonRedirect = () => {
    setSelectedAnimal(animal);
  };

  const ApprovalButton = () => {
    if (user) {
      updateStatus("APPROVED");
    }
  };

  const RejectButton = () => {
    if (user) {
      updateStatus("REJECTED");
    }
  };

  // unsure if this covers all cases
  const approveStatusButton = () => {
    console.log(animal);
    if (animal.status === "Available" && user.accessLevel === "INSTRUCTOR") {
      console.log("in instructor");
      return (
        <Button variant="success" onClick={ApprovalButton}>
          Request
        </Button>
      );
    } else if (
      animal.status === "Pending" &&
      user.accessLevel === "ADMIN" &&
      animal.adminStatus === "null"
    ) {
      console.log("in admin");
      return (
        <ButtonGroup vertical>
          <Button variant="success mb-1" onClick={ApprovalButton}>
            Approve
          </Button>
          <Button variant="danger" onClick={RejectButton}>
            Deny
          </Button>
        </ButtonGroup>
      );
    } else if (
      animal.status === "Pending" &&
      user.accessLevel === "TECHNICIAN" &&
      animal.adminStatus !== "null" &&
      animal.technicianStatus === "null"
    ) {
      console.log("in admin");
      return (
        <ButtonGroup vertical>
          <Button variant="success mb-1" onClick={ApprovalButton}>
            Approve
          </Button>
          <Button variant="danger" onClick={RejectButton}>
            Deny
          </Button>
        </ButtonGroup>
      );
    } else if (animal.status === "Approved") {
      console.log("in admin");
      return (
        <Button variant="success" disabled>
          In Lab
        </Button>
      );
    } else {
      //lock button
      return (
        <Button variant="secondary" disabled>
          {animal.status}
        </Button>
      );
    }
  };

  const updateStatus = (status) => {
    status === "APPROVED" ? (status = true) : (status = false);

    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    let params = {
      AnimalID: animal.animalId,
      AccessLevel: user.accessLevel,
      UserID: user.userId,
      Status: status,
    };

    var config = {
      method: "put",
      url: "http://localhost:8080/animal-management/status",
      headers: {},
      params: params,
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .then(setReRender(!reRender))
      .catch(function (error) {
        console.log(error);
      });
  };

  const tableImage = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "6rem",
  };

  const tableText = {
    justifyContent: "center",
    verticalAlign: "middle",
    textAlign: "center",
    height: "100%",
  };

  if (user) {
    return (
      <tr>
        <td style={tableText}>
          <Image src={animal.image} rounded style={tableImage} />
        </td>
        <td style={tableText}>{animal.name}</td>
        <td style={tableText}>
          {animal.animalType.charAt(0) +
            animal.animalType.slice(1).toLowerCase()}
        </td>
        <td style={tableText}>{animal.breed}</td>
        <td style={tableText}>{animal.dob}</td>
        <td style={tableText}>{animal.healthStatus}</td>
        <td style={tableText}>{animal.status}</td>
        <td style={tableText}>{approveStatusButton()}</td>
        <td style={tableText}>
          <Link
            onClick={ButtonRedirect}
            to={`/Animal/${animal.animalId}`}
            key={animal.animalId}
          >
            <Button variant="primary">View</Button>
          </Link>
        </td>

        {/* this could link to a page? */}
      </tr>
    );
  } else {
    return (
      <tr>
        <td style={tableText}>{animal.name}</td>
        <td style={tableText}>
          {animal.animalType.charAt(0) +
            animal.animalType.slice(1).toLowerCase()}
        </td>
        <td style={tableText}>{animal.breed}</td>
        <td style={tableText}>{animal.dob}</td>
        <td style={tableText}>{animal.healthStatus}</td>
        <td style={tableText}>{animal.status}</td>
        <td style={tableText}>
          {
            <Button variant="secondary" disabled>
              {animal.status}
            </Button>
          }
        </td>
        <td style={tableText}>
          <Link
            onClick={ButtonRedirect}
            to={`/Animal/${animal.animalId}`}
            key={animal.animalId}
          >
            <Button variant="primary">View</Button>
          </Link>
        </td>
      </tr>
    );
  }
};

export default AnimalItem;
