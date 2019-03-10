import React from "react";
import styled from 'styled-components'
import { Title, Section, Image } from "rbx";
import "rbx/index.css";

import Logo from "./Logo";


export default class Heading extends React.Component {
  render() {
    return (
      <center>
          <Logo scale="10%" />
          <Title size={1}>LyricImage</Title>
          <Title subtitle size={2}>A WebApp to visualise a song's lyrics in images.</Title>
      </center>
    )
  }
}
