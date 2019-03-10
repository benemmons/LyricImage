import React from "react";
import { Delete, Notification } from "rbx";
export default class HelloWorldNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  onClose = () => {
    this.setState({ active: false });
  };
  render() {
    if (!this.state.active) {
      return (
        <div>
          <span>You've closed the notification </span>
        </div>
      );
    }
    return (
    <Notification color="primary">
      Welcome to 
      <strong>LyricImage</strong>
      <Delete onClick={this.onClose} />
    </Notification>);
  }
}
