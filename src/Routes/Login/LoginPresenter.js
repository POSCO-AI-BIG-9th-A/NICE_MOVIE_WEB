import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div``;

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const Title = styled.span`
  display: flex;
  font-size: 16px;
  align-items: left;
  margin: 0 0 14px;
  width: 100%;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
`;

const EmailInput = styled.input.attrs({ type: "email" })`
  position: relative;
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  border-top-width: 1px;
  border-bottom-width: 0;
  width: 100%;
  padding: 10px 10px 10px 14px;
  border-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const PasswordInput = styled.input.attrs({
  type: "password",
})`
  position: relative;
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: normal;
  border-color: rgba(154, 151, 161, 0.2);
  font-weight: 400px;
  border: 1px solid #d4d4d4;
  border-top-width: 1px;
  border-bottom-width: 0;
  width: 100%;
  padding: 10px 10px 10px 14px;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

const SubmitBtnBlock = styled.div`
  border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  width: 100%;
  padding: 0 0 21px;
  margin: 16px 0;
`;

const LoginBtn = styled.button`
  background-color: #e50914;
  color: #ffffff;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  height: 48px;
  line-height: 47px;
  border-radius: 40px;
`;

const JoinBtnBlock = styled(Link)`
  width: 100%;
`;

const JoinBtn = styled.button`
  background-color: white;
  width: 100%;
  height: 48px;
  font-size: 16px;
  border-radius: 40px;
  letter-spacing: -0.1px;
`;
const LoginPresenter = ({
  email,
  password,
  error,
  handleSubmit,
  updateTerm,
}) => (
  <>
    <Helmet>
      <title>Sign In | KoYoflix</title>
    </Helmet>
    <Container>
      <Backdrop bgImage={``} />
      <Content>
        <Title>Sign-In</Title>
        <Form onSubmit={handleSubmit}>
          <EmailInput
            placeholder="Email(example@posco.com)"
            value={email}
            onChange={updateTerm}
          />
          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={updateTerm}
          />
          <SubmitBtnBlock>
            <LoginBtn>Sign In</LoginBtn>
          </SubmitBtnBlock>
        </Form>
        <JoinBtnBlock to="/join">
          <JoinBtn>Sign Up</JoinBtn>
        </JoinBtnBlock>
      </Content>
    </Container>
  </>
);

LoginPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default LoginPresenter;
