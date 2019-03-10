import React from "react";
import ReactDOM from "react-dom";

import { Container } from "rbx";
import "rbx/index.css";

import HelloWorldButton from './HelloWorldButton'
import HelloWorldNotification from './HelloWorldNotification'

function App() {
  return (
    <Container>
      <HelloWorldNotification />      
      <HelloWorldButton />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);