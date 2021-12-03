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

const Header = ({ user, setUser }) => {};
