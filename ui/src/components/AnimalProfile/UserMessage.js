import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from 'react-bootstrap/Container';
import { Button, ButtonGroup } from 'react-bootstrap';
import AnimalInfo from './AnimalInfoModal';

const styles = {
  container: {
    paddingLeft: '5%',
  },
  containerRight: {
    paddingLeft: '70%',
  },
};

const UserMessage = (props) => {
  const deleteMessage = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('animalId', props.animalId);
    data.append('username', props.username);
    data.append('timestamp', props.timestamp);

    var config = {
      method: 'delete',
      url: 'http://localhost:8080/records',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        props.setReRender(!props.reRender);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="d-inline-flex p-2">
      <ToastContainer style={styles.containerRight}>
        <Toast className="d-inline-block m-1">
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{props.username}</strong>
            <small className="text-muted">{props.timestamp}</small>
          </Toast.Header>
          <Toast.Body className="Dark">{props.message}</Toast.Body>
          <ButtonGroup vertical>
            <AnimalInfo props={props} />
            <Button variant="outline-danger" size="sm" onClick={deleteMessage}>
              Delete
            </Button>
          </ButtonGroup>
        </Toast>{' '}
      </ToastContainer>
    </Container>
  );
};

export default UserMessage;
