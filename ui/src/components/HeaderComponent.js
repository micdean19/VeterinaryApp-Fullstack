// Header Component
// Remember a component in react can either be a class (state) or a function
// Either way the convention is that they start by a capitalize letter

// A component just RETURNS a UI
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logout from "./LogoutComponent";

// Example 1 of styling
const containerstyle = {
    borderBottom: "10px solid black",
    background: "#efefef",
    padding: "10px 10px 0 10px",
    height: "10vh",
};

const spacingrightButton = {
    marginRight: "1.2rem",
};

const columnPutEverythingRight = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "4rem",
    textAlign: "left",
    // Note all CSS work here, except instead of margin-right you use camelcase
};

const Header = ({ user, setUser }) => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        checkAdmin();
    }, [user]);

    const checkAdmin = () => {
        if (user && user.accessLevel === "admin") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    };

    return (
        <Container fluid className="p-3" style={containerstyle}>
            <Row>
                <Col>
                    <h3> Spyhill Veterinary App</h3>
                </Col>

                <Col
                    // Using Spacing from Boostrap!!!
                    className="mx-md-n5"
                    // Example 2 of styling
                    style={columnPutEverythingRight}
                >
                    <ButtonGroup aria-label="Basic example">
                        <Button style={spacingrightButton} variant="flat">
                            <Link className="text-dark" to="/Home">
                                Home Route
                            </Link>
                        </Button>
                        <Button variant="flat" style={spacingrightButton}>
                            <Link className="text-dark" to="/Animal">
                                Animal Route
                            </Link>
                        </Button>
                        <Logout setUser={setUser} />
                        {admin === true ? (
                            <Button variant="flat" style={spacingrightButton}>
                                <Link className="text-dark" to="/Admin">
                                    Admin Route
                                </Link>
                            </Button>
                        ) : null}
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
