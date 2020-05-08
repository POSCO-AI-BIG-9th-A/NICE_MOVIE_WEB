import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    recommendation: null,
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const recommendation = await Promise.all(
        ["tt0371746", "tt0499549", "tt0435761"].map((movieId) => {
          return moviesApi.movieDetail(movieId);
        })
      );

      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        recommendation,
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: "Can't find Movies information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const {
      recommendation,
      nowPlaying,
      upcoming,
      popular,
      error,
      loading,
    } = this.state;
    return (
      <HomePresenter
        recommendation={recommendation}
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
