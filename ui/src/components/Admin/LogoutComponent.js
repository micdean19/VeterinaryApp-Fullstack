import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Logout = ({ setUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    setUser({});
    setShow(false);
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <>
      <Button variant="flat" onClick={handleShow}>
        {" "}
        <Link className="text-dark">Logout</Link>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={logout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Logout;
