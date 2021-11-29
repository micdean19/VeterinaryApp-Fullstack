// We are mostly gonna use functional components but can be changed to object componets if we have to
// import React from "react";

// function Header() {
//     return <div> Header Component</div>;
// }

// export default Header;

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
const Header = () => {
    return (
        // <h1>Hi</h1>
        <Container className="p-3 bg-secondary">
            {/* Example of Styling */}
            <style type="text/css">
                {`
                .btn-flat {
                    background-color: purple;
                    color: white;
                    }

                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }

                border-bottom: 0.5.px solid silver;
                background: #efefef;
                padding: 1000px;
                `}
            </style>
            <Row>
                <Col>
                    <h3> Main Page</h3>
                </Col>
                <Col>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="flat">Left</Button>
                        <Button variant="primary" className="">
                            Middle
                        </Button>
                        <Button variant="danger">Right</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
    return <h1> Header2 </h1>;
};

export default Header;
