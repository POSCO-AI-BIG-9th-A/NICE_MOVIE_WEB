import React from "react";
import JoinPresenter from "./JoinPresenter";

export default class extends React.Component {
  state = {
    username: "",
    email: "",
    gender: "",
    st: "",
    age: "",
    married: false,
    kids_under12: false,
    register_year: "2020",
    error: null,
  };

  handleSubmit = (event) => {
    const {
      username,
      email,
      gender,
      st,
      age,
      married,
      kids_under12,
      register_year,
      error,
    } = this.state;
    // DB Server
  };

  updateTerm = (event) => {
    const {
      target: { type, value },
    } = event;

    this.setState({ [type]: value });
  };
  updateAge = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ age: value });
  };
  updateUsername = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ username: value });
  };

  render() {
    const {
      username,
      email,
      password,
      gender,
      st,
      age,
      married,
      kids_under12,
      register_year,
      error,
    } = this.state;
    return (
      <JoinPresenter
        username={username}
        email={email}
        password={password}
        gender={gender}
        st={st}
        age={age}
        married={married}
        kids_under12={kids_under12}
        register_year={register_year}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        updateAge={this.updateAge}
        updateUsername={this.updateUsername}
      />
    );
  }
}
