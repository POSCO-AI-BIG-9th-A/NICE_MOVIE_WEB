import React from "react";
import WatchedPresenter from "./WatchedPresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    inventory: null,
    loading: true,
    error: null,
  };

  handleChange = (event) => {
    const { target } = event;
    console.log(event);
    // this.setState();
  };
  async componentDidMount() {
    const movieList = [
      "tt0499549",
      "tt0121766",
      "tt3896198",
      "tt3606756",
      "tt1049413",
      "tt0435761",
      "tt1211837",
    ];
    try {
      const inventory = await Promise.all(
        movieList.map((movieId) => {
          return moviesApi.movieDetail(movieId);
        })
      );
      this.setState({
        inventory,
      });
    } catch {
      this.setState({
        error: "Can't find Movies information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { inventory, loading, error } = this.state;
    return (
      <WatchedPresenter
        inventory={inventory}
        loading={loading}
        error={error}
        handleChange={this.handleChange}
      />
    );
  }
}
