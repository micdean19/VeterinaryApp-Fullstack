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

const footerstyle = {
    background: "#333",
    color: "#fff",
    height: "7vh",
};
const footerStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
};
const Footer = () => {
    return (
        // <h1>Hi</h1>
        <Container fluid className="align-middle w-100" style={footerstyle}>
            <Row style={footerStyling}>
                <Col className="w-75"></Col>
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "2rem",
                        textAlign: "middle",
                        // Note all CSS work here, except instead of margin-right you use camelcase
                    }}
                    className="align-middle pt-2 mt-1"
                >
                    <p className="">By Alex & Michael</p>
                </Col>
            </Row>
        </Container>
    );
    return <h1> Header2 </h1>;
};

export default Footer;
