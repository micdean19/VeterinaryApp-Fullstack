import React from 'react';
import { useState, useEffect } from 'react';
import Message from './DiscussionMessage';
import UserMessage from './UserMessage';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Discussion = ({ animal }) => {
  const [reRender, setReRender] = useState(false);
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    const search = () => {
      var axios = require('axios');
      let endpoint = '/records';
      let params = { AnimalID: animal.animalId };
      let headers = {};

      var config = {
        method: 'get',
        url: 'http://localhost:8080/records',
        headers: {},
        params: params,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setRecords(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    search();
  }, [reRender]);

  const renderedList = records.map((record) => {
    if (record.username === user.username) {
      return (
        <UserMessage
          reRender={reRender}
          setReRender={setReRender}
          username={record.username}
          message={record.comment}
          userFirstName={user.userFirstName}
          userLastName={user.userLastName}
          measurement={record.measurement}
          timestamp={record.timestamp}
        />
      );
    } else {
      return (
        <Message
          reRender={reRender}
          setReRender={setReRender}
          username={record.username}
          message={record.comment}
          userFirstName={user.userFirstName}
          userLastName={user.userLastName}
          measurement={record.measurement}
          timestamp={record.timestamp}
        />
      );
    }
  });

  return (
    <>
      <Container>
        <InputGroup>
          <Button variant="outline-primary" id="button-addon1">
            Submit
          </Button>
          <FormControl as="textarea" aria-label="With textarea" rows={2} />
        </InputGroup>
      </Container>
      {renderedList}
    </>
  );
};

export default Discussion;
