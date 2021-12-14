import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Treatment = ({ animal, user }) => {
  const [show, setShow] = useState(false);
  const [treatment, setTreatment] = useState(1);
  const [illness, setIllness] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('animalId', animal.animalId);
    data.append('userId', user.userId);
    data.append('treatmentStage', treatment);
    data.append('description', description);
    data.append('illness', illness);

    var config = {
      method: 'post',
      url: 'http://localhost:8080/treatment',
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

  const treatmentStages = {
    1: 'Level 1',
    2: 'Level 2',
    3: 'Level 3',
    4: 'Level 4',
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="mt-2">
        Add Diagnosis
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Treatment</Modal.Title>
        </Modal.Header>
        <Container>
          <Form.Label className="mt-3">Upload Picture</Form.Label>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Treatment Stage: ${treatmentStages[treatment]}`}
            className="mb-3"
            onSelect={(e) => setTreatment(e)}
          >
            <Dropdown.Item eventKey="1">{treatmentStages[1]}</Dropdown.Item>
            <Dropdown.Item eventKey="2">{treatmentStages[2]}</Dropdown.Item>
            <Dropdown.Item eventKey="3">{treatmentStages[3]}</Dropdown.Item>
            <Dropdown.Item eventKey="4">{treatmentStages[4]}</Dropdown.Item>
          </DropdownButton>
          <InputGroup
            className="mb-3"
            onChange={(e) => setIllness(e.target.value)}
          >
            <InputGroup.Text>Illness</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" rows={1} />
          </InputGroup>
          <InputGroup onChange={(e) => setDescription(e.target.value)}>
            <InputGroup.Text>Treatment Description</InputGroup.Text>
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

export default Treatment;
