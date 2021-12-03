import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

const LoadingButton = ({ request }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
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

// render(<LoadingButton />);

export default LoadingButton;
