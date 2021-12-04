import React, { useState } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Animal from "../AnimalComponent";
import Button from "react-bootstrap/Button";

const AnimalItem = ({
  reRender,
  setReRender,
  animal,
  setSelectedAnimal,
  user,
}) => {
  const [show, setShow] = useState(false);

  const ButtonClick = () => {
    setSelectedAnimal(animal);
    setShow(true);
  };

  // unsure if this covers all cases
  const approveStatusButton = () => {
    console.log(animal);
    if (animal.status === "Available" && user.accessLevel === "INSTRUCTOR") {
      console.log("in instructor");
      return <Button variant="success">Request</Button>;
    } else if (
      animal.status === "Pending" &&
      user.accessLevel === "ADMIN" &&
      animal.adminStatus !== 1000
    ) {
      console.log("in admin");
      return <Button variant="success">Approve</Button>;
    } else if (
      animal.status === "Pending" &&
      user.accessLevel === "TECHNICIAN" &&
      animal.adminStatus !== 1000 &&
      animal.technicianStatus !== 1000
    ) {
      console.log("in admin");
      return <Button variant="success">Approve</Button>;
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
          Request
        </Button>
      );
    }
  };

  return (
    <tr>
      <td>{animal.name}</td>
      <td>
        {animal.animalType.charAt(0) + animal.animalType.slice(1).toLowerCase()}
      </td>
      <td>{animal.breed}</td>
      <td>{animal.dob}</td>
      <td>{animal.healthStatus}</td>
      {/* <td>{animal.age}</td> */}
      <td>{animal.status}</td>
      <td>{animal.adminStatus}</td>
      <td>{animal.technicianStatus}</td>
      <td>{approveStatusButton()}</td>
      <td>
        <Link
          onClick={ButtonClick}
          to={`/Animal/${animal.animalId}`}
          key={animal.animalId}
        >
          <Button variant="primary">View</Button>
        </Link>
      </td>

      {/* this could link to a page? */}
    </tr>
  );
};

export default AnimalItem;
