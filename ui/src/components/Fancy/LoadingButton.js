import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 700));
}

const LoadingButton = ({ request, handleClose }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest()
        .then(() => {
          setLoading(false);
        })
        .then(() => {
          handleClose();
        });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    if (request) {
      request();
    }
  };

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      type="submit"
    >
      {isLoading ? "Processing…" : "Submit"}
    </Button>
  );
};

export default LoadingButton;
