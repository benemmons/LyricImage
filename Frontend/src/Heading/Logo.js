import React from "react";

export default class Logo extends React.Component {
    render() {
        return (
        <img width={this.props.scale} alt="Logo" src="https://raw.githubusercontent.com/benemmons/LyricImage/master/logo.svg?sanitize=true" />
        );
    }
  }
  