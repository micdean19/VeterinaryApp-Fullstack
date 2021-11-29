// We are mostly gonna use functional components but can be changed to object componets if we have to
// import React from "react";

// Header Component
// Remember a component in react can either be a class (state) or a function
// Either way the convention is that they start by a capitalize letter

// A component just RETURNS a UI

import React, { useState } from "react";
// import Link from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
const Footer = () => {
    return (
        // <h1>Hi</h1>
        <Container className="p-3 bg-primary">
            <Row>
                <Col>
                    <h3> Footer Component</h3>
                </Col>
                <Col>
                    <h3>Hi</h3>
                </Col>
            </Row>
        </Container>
    );
    return <h1> Header2 </h1>;
};

export default Footer;
