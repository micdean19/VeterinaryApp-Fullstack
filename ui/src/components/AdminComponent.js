import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchFirst, setSearchFirst] = useState("");
  const [searchLast, setSearchLast] = useState("");

  useEffect(() => {
    const search = () => {
      var axios = require("axios");
      let endpoint = "/all";
      let params = {};
      let headers = {};

      console.log(searchLast);

      if (searchFirst != "" || searchLast != "") {
        endpoint = "/searchName";
        console.log("searching");
        params = {
          firstName: searchFirst,
          lastName: searchLast,
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
      if (searchFirst || searchLast) {
        console.log(searchLast);
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
  }, [searchFirst, searchLast]);

  return (
    <div className="ui container">
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <FormControl
          aria-label="First name"
          onChange={(e) => setSearchFirst(e.target.value)}
        />
        <FormControl
          aria-label="Last name"
          onChange={(e) => {
            setSearchLast(e.target.value);
            console.log(e.target.value);
          }}
        />
      </InputGroup>
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <UserList onUserSelect={setSelectedUser} users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
