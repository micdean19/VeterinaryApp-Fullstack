import React, { useEffect } from "react";
import AnimalItem from "./AmimalItem";
import Table from "react-bootstrap/Table";

const AnimalList = ({
  reRender,
  setReRender,
  animals,
  setSelectedAnimal,
  user,
}) => {
  const renderedList = animals.map((animal) => {
    return (
      <AnimalItem
        reRender={reRender}
        setReRender={setReRender}
        setSelectedAnimal={setSelectedAnimal}
        animal={animal}
        user={user}
      />
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Breed</th>
          <th>DOB</th>
          <th>Health</th>
          {/* <th>Age</th> */}
          <th>Status</th>
          <th>Admin Approval</th>
          <th>Technician Approval</th>
          <th>Request</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody> {renderedList}</tbody>
    </Table>
  );
};

export default AnimalList;
