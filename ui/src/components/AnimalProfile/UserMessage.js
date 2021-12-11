import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const styles = {
  container: {
    paddingLeft: '5%',
  },
  containerRight: {
    paddingLeft: '70%',
  },
};

const UserMessage = (props) => {
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
          <Button className="mb-2">Detailed View</Button>
        </Toast>{' '}
      </ToastContainer>
    </Container>
  );
};

export default UserMessage;
