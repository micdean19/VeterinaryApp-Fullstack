import React, { useState } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Animal from "../AnimalComponent";
import Button from "react-bootstrap/Button";

const AnimalItem = ({ reRender, setReRender, animal, setSelectedAnimal }) => {
  const [show, setShow] = useState(false);

  const ButtonClick = () => {
    setSelectedAnimal(animal);
    setShow(true);
    console.log("UserItem: ", animal);

    // return (

    // );
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
      <td>{animal.age}</td>
      <td>{animal.status}</td>
      <td>{animal.adminStatus}</td>
      <td>{animal.technicianStatus}</td>
      <td>
        <BrowserRouter>
          <Route name="animal" path="/Animal">
            <Animal
              animal={animal}
              setReRender={setReRender}
              reRender={reRender}
            />
          </Route>
        </BrowserRouter>
        <Link
          onClick={ButtonClick}
          to={`/Animal/${animal.animalId}`}
          key={animal.animalId}
        >
          Open Page
        </Link>
      </td>

      {/* this could link to a page? */}
    </tr>
  );
};

export default AnimalItem;
