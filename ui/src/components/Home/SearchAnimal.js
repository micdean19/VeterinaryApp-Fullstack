import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import AnimalList from "./AnimalList";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalName, setAnimalName] = useState("");
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const search = () => {
      var axios = require("axios");
      let endpoint = "/all";
      let params = {};
      let headers = {};

      //TODO need to switch to the correct endpoint
      if (animalName !== "") {
        endpoint = "/searchName";
        params = {
          name: animalName,
        };
      }

      var config = {
        method: "get",
        url: "http://localhost:8080/animal-management" + endpoint,
        params: params,
        headers: headers,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setAnimals(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    if (!animals.length) {
      console.log("searching on initial animal list");
      search();
    }
    const id = setTimeout(() => {
      if (animalName) {
        search();
      } else {
        console.log("searching on interval animal list");
        search();
      }
    }, 500);

    // the only thing you can return is a function in a useEffect
    // runs when the component unmounts OR at the start of a new render
    // this is why we see the function run at the beginning of the render
    // use this to clean up our timer
    return () => {
      clearTimeout(id);
    };
  }, [animalName, reRender]);

  return (
    <div className="ui container">
      <InputGroup className="mb-3">
        <InputGroup.Text>Animal Name</InputGroup.Text>
        <FormControl
          aria-label="Name"
          onChange={(e) => setAnimalName(e.target.value)}
        />
      </InputGroup>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <AnimalList
              reRender={reRender}
              setReRender={setReRender}
              setSelectedAnimal={setSelectedAnimal}
              animals={animals}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;
