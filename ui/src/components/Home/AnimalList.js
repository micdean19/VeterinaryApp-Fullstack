import React, { useEffect } from "react";
import AnimalItem from "./AmimalItem";
import Table from "react-bootstrap/Table";

const AnimalList = ({ reRender, setReRender, animals, setSelectedAnimal }) => {
  const renderedList = animals.map((animal) => {
    return (
      <AnimalItem
        reRender={reRender}
        setReRender={setReRender}
        setSelectedAnimal={setSelectedAnimal}
        animal={animal}
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
          <th>Admin Decision</th>
          <th>Technician Decision</th>
          <th>Request</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody> {renderedList}</tbody>
    </Table>
  );
};

export default AnimalList;
