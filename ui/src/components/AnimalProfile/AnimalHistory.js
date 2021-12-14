import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Treatment from "./Treatment";
import Prescription from "./Prescription";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AnimalHistory = ({ animal, setAnimal }) => {
    const [user, setUser] = useState();
    const [student, setStudent] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            if (foundUser.accessLevel === "STUDENT") {
                setStudent(true);
            }
        }
    }, []);

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
                        {/* <Col>
                            <img
                                style={imgStyle}
                                src={animal.image}
                                alt="new"
                            />
                        </Col> */}
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="">TimeStamp</th>
                                        <th>Event Type</th>
                                        <th>User Responsible</th>
                                        <th>Event State</th>
                                        <th colSpan="6">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Name */}
                                    <tr>
                                        <td>2021-12-20 09:00:00</td>
                                        <td>Treatment</td>
                                        <td>Technician_0</td>
                                        <td>In Progress</td>

                                        <td className="text-start">
                                            Observing initial response to new
                                            medication
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2021-12-20 09:00:00</td>
                                        <td>Prescription</td>
                                        <td>Mike19</td>
                                        <td>Completed</td>

                                        <td className="text-start">
                                            Prescribing regular dosage of
                                            Glucosamine (2 pills a day after
                                            food) and a low dosage (1 pill every
                                            morning) of Chondroitin.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2021-12-14 09:00:00</td>
                                        <td>Appointment</td>
                                        <td>Technician_0</td>
                                        <td>Completed</td>

                                        <td className="text-start">
                                            X-ray of knee joint shows mild to
                                            moderate inflation below the Menicus
                                            and around the Lateral ligament.
                                            Doctor's Impression: Mild Arthritis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2021-12-10 09:00:00</td>
                                        <td>Diagnosis</td>
                                        <td>Mike19</td>
                                        <td>Completed</td>

                                        <td className="text-start">
                                            Complaints of Aching Muscles.
                                            Muscles are stiffs and can't walk
                                            straight. Xray Appointment has been
                                            Scheduled.
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>14th December 2021 9:00am</td>
                                        <td>{animal.name}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr> */}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
};

export default AnimalHistory;
