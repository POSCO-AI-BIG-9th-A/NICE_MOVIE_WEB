import React from "react";
import LoginPresenter from "./LoginPresenter";
import { serverApi } from "api";

export default class extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // server DB check
    serverApi.getUser(email, password);
  };

  updateTerm = (event) => {
    const {
      target: { type, value },
    } = event;
    this.setState({
      [type]: value,
    });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
