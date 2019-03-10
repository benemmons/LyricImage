import React from "react";
import ReactDOM from "react-dom";

import { Block} from "rbx";
import "rbx/index.css";

import Heading from './Heading/Heading'
import Body from './Body/Body'

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeIn = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;


function App() {
  return (
    <center>
      <FadeIn>
        <Heading/>
        <Block/>
        <Body/>
      </FadeIn>

    </center>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);