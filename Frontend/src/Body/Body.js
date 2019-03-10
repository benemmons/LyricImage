import React from "react";
import { Button, Input } from "rbx";
import "rbx/index.css";


export default class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stage: 0};
  }

   onStartClick(currentStage) {
    this.setState({stage: currentStage + 1 });
  }


  render() {
    switch(this.state.stage) {
      case 0:
        return (
          <Button size="large" color="primary" onClick={() => this.onStartClick(this.state.stage)}>Start</Button>
        )
      
      case 1:
      return (
        <div>
          <div style={{"width": "20%"}}>
            <Input size="medium"/>
          </div>
        </div>

      )
    }

  }
}
