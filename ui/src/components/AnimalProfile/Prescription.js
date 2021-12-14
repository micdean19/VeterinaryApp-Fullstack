import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Prescription = ({ animal, user }) => {
  const [show, setShow] = useState(false);
  const [drug, setDrug] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [dosage, setDosage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('animalId', animal.animalId);
    data.append('userId', user.userId);
    data.append('drugId', drug);
    data.append('instructions', instructions);
    data.append('dosage', dosage);

    var config = {
      method: 'post',
      url: 'http://localhost:8080/prescribe',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const drugs = {
    1: `Drug A`,
    2: `Drug B`,
    3: 'Common Drug C',
    4: 'Common Drug D',
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="mt-2">
        Add Prescription
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Container>
          <DropdownButton
            id="dropdown-basic-button"
            title={animal ? `Drug: ${drugs[drug]}` : 'Drug'}
            className="mb-3 mt-3"
            onSelect={(e) => setDrug(e)}
          >
            <Dropdown.Item eventKey="1">{drugs[1]}</Dropdown.Item>
            <Dropdown.Item eventKey="2">{drugs[2]}</Dropdown.Item>
            <Dropdown.Item eventKey="3">{drugs[3]}</Dropdown.Item>
            <Dropdown.Item eventKey="4">{drugs[4]}</Dropdown.Item>
          </DropdownButton>
          <InputGroup
            className="mb-3"
            onChange={(e) => setDosage(e.target.value)}
          >
            <InputGroup.Text>Dosage</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" rows={1} />
          </InputGroup>
          <InputGroup onChange={(e) => setInstructions(e.target.value)}>
            <InputGroup.Text>Prescription Instructions</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" rows={4} />
          </InputGroup>
        </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Prescription;
