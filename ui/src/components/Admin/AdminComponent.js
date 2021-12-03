import React, { useState, useEffect } from "react";
import UserList from "./User/UserList";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const search = () => {
      var axios = require("axios");
      let endpoint = "/all";
      let params = {};
      let headers = {};

      if (firstName !== "" || lastName !== "") {
        endpoint = "/searchName";
        params = {
          firstName: firstName,
          lastName: lastName,
        };
      }

      var config = {
        method: "get",
        url: "http://localhost:8080/user-management" + endpoint,
        params: params,
        headers: headers,
      };

      console.log(config);

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUsers(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    if (!users.length) {
      console.log("searching on initial");
      search();
    }
    const id = setTimeout(() => {
      if (firstName || lastName) {
        search();
      } else {
        console.log("searching on interval");
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
  }, [firstName, lastName, reRender]);

  return (
    <div className="ui container">
      <InputGroup className="mb-3">
        <InputGroup.Text>First Name</InputGroup.Text>
        <FormControl
          aria-label="First name"
          onChange={(e) => setFirst(e.target.value)}
        />
        <InputGroup.Text>Last name</InputGroup.Text>
        <FormControl
          aria-label="Last name"
          onChange={(e) => {
            setLast(e.target.value);
            console.log(e.target.value);
          }}
        />
      </InputGroup>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <UserList
              reRender={reRender}
              setReRender={setReRender}
              setSelectedUser={setSelectedUser}
              users={users}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
