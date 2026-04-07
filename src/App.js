import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function App() {
  const firstName = "John"; // Change this to your name or leave empty

  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {firstName ? (
          <>
            <h2>Hello, {firstName}!</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Greeting"
              style={{ marginTop: "10px" }}
            />
          </>
        ) : (
          <h2>Hello, there!</h2>
        )}
      </div>
    </div>
  );
}

export default App;
