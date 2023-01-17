import { useReducer } from "react";
import { Button } from "react-bootstrap";
import { act } from "react-dom/test-utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;
    case "reset":
      return { count: action.payload };
      break;
    default:
      return state;
  }
};

export function ComponentUseReducer({ initialCount = 0 }) {
  const [state, dispath] = useReducer(reducer, { count: initialCount });

  function increment() {
    dispath({
      type: "increment",
    });
  }
  function decrement() {
    dispath({
      type: "decrement",
    });
  }
  function reset() {
    dispath({
      type: "reset",
      payload: initialCount,
    });
  }
  return (
    <div className="container">
      <h1>Work with values</h1>
      <p>{state.count}</p>
      <Button variant="primary" onClick={increment}>
        Increment
      </Button>{" "}
      <Button variant="primary" onClick={decrement}>
        Decrement
      </Button>{" "}
      <Button variant="primary" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}