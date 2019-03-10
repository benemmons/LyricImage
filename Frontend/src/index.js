import React from "react";
import ReactDOM from "react-dom";

import { Container } from "rbx";
import "rbx/index.css";

import Heading from './Heading'

function App() {
  return (
    <div>
      <Heading/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);