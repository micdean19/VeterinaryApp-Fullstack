import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AnimalInfo = ({ props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log('showing');
  };

  return (
    <>
      <Button variant="primary mb-2" onClick={handleShow} size="sm">
        Details
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Animal Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Comments</h5>
          <p>{props.message}</p>
          <h5>Measurement</h5>
          <p>{props.measurement}</p>
          <h5>Timestamp</h5>
          <p>{props.timestamp}</p>
          <h5>Logged By</h5>
          <p>{props.username}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AnimalInfo;
