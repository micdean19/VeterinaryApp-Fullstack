import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from 'react-bootstrap/Container';

const styles = {
  container: {
    paddingLeft: '5%',
  },
  containerRight: {
    paddingLeft: '70%',
  },
};

const Message = ({ username, message }) => {
  return (
    <Container className="d-inline-flex p-2">
      <ToastContainer style={styles.container}>
        <Toast>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{username}</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Message;
