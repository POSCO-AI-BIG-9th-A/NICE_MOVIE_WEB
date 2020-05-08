import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { WatchedPoster } from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;
const Content = styled.div``;

const WatchedPresenter = ({ inventory, loading, error, handleChange }) => (
  <>
    <Helmet>
      <title>TV Shows | KoYoflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {inventory && inventory.length > 0 && (
          <Section title="Check your Watched Movies">
            {inventory &&
              inventory.length > 0 &&
              inventory.map(({ data: movie }) => (
                <WatchedPoster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  year={movie.release_date.substring(0, 4)}
                  handleChange={handleChange}
                ></WatchedPoster>
              ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
    ;
  </>
);
WatchedPresenter.propTypes = {
  inventory: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default WatchedPresenter;
