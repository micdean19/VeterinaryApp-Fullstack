import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Upload from "./UploadPhoto";
const AnimalHome = ({ animal, setAnimal }) => {
  const imgStyle = {
    // width: "450px",
    // height: "auto",
    maxHeight: "450px",
    width: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const positionRow = {
    height: "68vh",
    marginTop: "4rem",
    marginBottom: "4rem",
  };

  const tableheader = {
    width: "25%",
  };

  if (animal === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Container>
          <Row style={positionRow}>
            <Col>
              <img style={imgStyle} src={animal.image} alt="new" />
              <Upload buttonTitle="Upload Photo" />

              <Button className="m-3" variant="dark">
                Report Problem
              </Button>
            </Col>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="font-weight-bold text-justify"></th>
                    <th colSpan="3">Animal Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Name */}
                  <tr>
                    <td className="fw-bold" style={tableheader}>
                      Name
                    </td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {animal.name}
                    </td>
                  </tr>

                  {/* Health Status */}
                  <tr>
                    <td className="fw-bold">Health Status</td>
                    <td className="text-center" colSpan="3">
                      {animal.healthStatus}
                    </td>
                  </tr>

                  {/* Age */}
                  <tr>
                    <td className="fw-bold">Age</td>
                    <td className="font-weight-bold text-center" colSpan="6">
                      {animal.age}
                    </td>
                  </tr>
                  {/* Kind */}
                  <tr>
                    <td className="fw-bold">Kind</td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {animal.animalType}
                    </td>
                  </tr>
                  {/* Breed */}
                  <tr>
                    <td className="fw-bold">Breed</td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {animal.breed}
                    </td>
                  </tr>
                  {/* Date of Birth */}
                  <tr>
                    <td className="fw-bold">Date of Birth</td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {animal.dob}
                    </td>
                  </tr>
                  {/* Availabilty */}
                  <tr>
                    <td className="fw-bold">Availabilty</td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {animal.status}
                    </td>
                  </tr>
                  {/* Last Health Check */}
                  <tr>
                    <td className="fw-bold">Go to Person</td>
                    <td className="font-weight-bold text-center" colSpan="3">
                      {/* Might have to load in props in here. */}
                      STILL HARDCODED
                    </td>
                  </tr>
                  {/* Person to go to */}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
};

export default AnimalHome;
