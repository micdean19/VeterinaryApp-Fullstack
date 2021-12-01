import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import reactDom from "react-dom";
function Animal() {
    const imgStyle = {
        width: "450px",
        height: "auto",
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
    return (
        <React.Fragment>
            <Container>
                <Row style={positionRow}>
                    <Col>
                        <img
                            style={imgStyle}
                            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                            // src="https://dogtime.com/assets/uploads/2019/05/alaskan-malamute-puppy-1-1280x720.jpg"
                            alt="new"
                        />
                        <Button className="m-3" variant="dark">
                            Upload Photos
                        </Button>
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
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        Mark
                                    </td>
                                </tr>

                                {/* Health Status */}
                                <tr>
                                    <td className="fw-bold">Health Status</td>
                                    <td className="text-center" colSpan="3">
                                        {/* Might have to load in props in here. */}
                                        Alive/Healthy
                                    </td>
                                </tr>

                                {/* Age */}
                                <tr>
                                    <td className="fw-bold">Age</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="6"
                                    >
                                        {/* Might have to load in props in here. */}
                                        5
                                    </td>
                                </tr>
                                {/* Kind */}
                                <tr>
                                    <td className="fw-bold">Kind</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        Cat
                                    </td>
                                </tr>
                                {/* Breed */}
                                <tr>
                                    <td className="fw-bold">Breed</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        Some kind of cat
                                    </td>
                                </tr>
                                {/* Color */}
                                <tr>
                                    <td className="fw-bold">Color</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        Greyish with Green eyes
                                    </td>
                                </tr>
                                {/* Date of Birth */}
                                <tr>
                                    <td className="fw-bold">Date of Birth</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        19 June 202x
                                    </td>
                                </tr>
                                {/* Last Health Check */}
                                <tr>
                                    <td className="fw-bold">Go to Person</td>
                                    <td
                                        className="font-weight-bold text-center"
                                        colSpan="3"
                                    >
                                        {/* Might have to load in props in here. */}
                                        Alex Leakos (Will be a link that points
                                        to page of user)
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

export default Animal;
