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
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(foundUser);
      if (foundUser.accessLevel === 'STUDENT') {
        setDisabled(true);
      }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('animalId', animal.animalId);
    data.append('username', user.username);
    data.append('userFirstName', '');
    data.append('userLastName', '');
    data.append('comment', message);
    data.append('measurement', '');

    var config = {
      method: 'post',
      url: 'http://localhost:8080/records',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setReRender(!reRender);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderedList = records.map((record) => {
    if (record.username === user.username) {
      return (
        <UserMessage
          animalId={animal.animalId}
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
          animalId={animal.animalId}
          reRender={reRender}
          setReRender={setReRender}
          username={record.username}
          message={record.comment}
          userFirstName={user.userFirstName}
          userLastName={user.userLastName}
          measurement={record.measurement}
          timestamp={record.timestamp}
          accessLevel={user.accessLevel}
          reRender={reRender}
          setReRender={setReRender}
        />
      );
    }
  });

  return (
    <>
      <Container>
        <InputGroup>
          <Button
            variant={disabled ? 'secondary' : 'primary-outline'}
            id="button-addon1"
            onClick={handleSubmit}
            disabled={disabled}
          >
            Submit
          </Button>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            rows={1}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </InputGroup>
      </Container>
      {renderedList}
    </>
  );
};

export default Discussion;
