import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const getInitialState = () => false;

export function ComponentUseState() {
  const [visible, setVisibility] = useState(getInitialState);
  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };
  return (
    <div className="container">
      <h1>Check useState</h1>
      <h2>What is React</h2>
      <Button variant="primary" onClick={handleClick}>
        {visible ? "Hide" : "Show"}
      </Button>
      {visible && (
        <Card>
          <Card.Body>
            A JavaScript library for building user interfaces
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
