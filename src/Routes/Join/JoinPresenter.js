import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 300px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const UsernameInput = styled.input.attrs({ type: "username" })`
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

const EmailInput = styled.input.attrs({ type: "email" })`
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  border-top-width: 1px;
  border-bottom-width: 0;
  width: 100%;
  padding: 10px 10px 10px 14px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  margin: 10px;
`;
const RadioLabel = styled.label`
  display: inline-block;
  width: 50%;
  margin: 0 0 -2px;
  padding: 12px 25px;
  font-weight: 600;
  text-align: center;
  background-color: white;
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  color: gray;

  &:hover {
    color: #e50914;
    cursor: pointer;
  }
`;

const PasswordInput = styled.input.attrs({ type: "password" })`
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  border-top-width: 1px;
  border-bottom-width: 0;
  width: 100%;
  padding: 10px 10px 10px 14px;
`;

const RadioBlock = styled.div``;

const Select = styled.select`
  display: flex;
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #d4d4d4;
  border-radius: 0px;
`;

const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

const AgeInput = styled.input`
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  border-top-width: 1px;
  border-bottom-width: 0;
  width: 100%;
  padding: 10px 10px 10px 14px;
`;

const CheckboxBlock = styled.div`
  display: flex;
  width: 100%;
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: flex;
  width: 100%;
  margin: 0 0 -2px;
  padding: 12px 25px;
  font-weight: 600;
  text-align: center;
  background-color: white;
  border-color: rgba(154, 151, 161, 0.2);
  border: 1px solid #d4d4d4;
  color: gray;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

const SubmitBtnBlock = styled.div`
  width: 100%;
  padding: 0 0 21px;
  margin: 16px 0;
`;

const SubmitBtn = styled.button`
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

const US_State = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "AA",
  "AE",
  "AP",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const JoinPresenter = ({
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
  handleSubmit,
  updateTerm,
  updateAge,
  updateUsername,
}) => (
  <>
    <Helmet>
      <title>Join | KoYoflix</title>
    </Helmet>
    <Container>
      <Content>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <UsernameInput
            placeholder="Username"
            value={username}
            onChange={updateUsername}
          ></UsernameInput>
          <EmailInput
            placeholder="Email (example@posco.com)"
            value={email}
            onChange={updateTerm}
          ></EmailInput>
          <PasswordInput
            placeholder="Password (At least 6 characters)"
            value={password || ""}
            onChange={updateTerm}
          ></PasswordInput>
          <AgeInput
            placeholder="Age"
            value={age}
            onChange={updateAge}
          ></AgeInput>

          <RadioBlock>
            <RadioInput id="male" type="radio" value={"M"} />
            <RadioLabel htmlFor="male">Male</RadioLabel>
            <RadioInput id="female" type="radio" value={"F"} />
            <RadioLabel htmlFor="female">Female</RadioLabel>
          </RadioBlock>

          <Select placeholder="st">
            <option value="" hidden>
              State
            </option>
            {US_State.map((us_state, index) => (
              <Option key={index} value={us_state}>
                {us_state}
              </Option>
            ))}
          </Select>
          <RadioBlock>
            <RadioInput id="married" value={true}></RadioInput>
            <RadioLabel htmlFor="married">Married</RadioLabel>
            <RadioInput id="single" value={false}></RadioInput>
            <RadioLabel htmlFor="single">Single</RadioLabel>
          </RadioBlock>
          <CheckboxBlock>
            <CheckboxInput
              id="isKids_under12"
              value={kids_under12}
            ></CheckboxInput>
            <CheckboxLabel htmlFor="isKids_under12">
              Have U kids under 12
            </CheckboxLabel>
          </CheckboxBlock>
          <SubmitBtnBlock>
            <SubmitBtn>Create Account</SubmitBtn>
          </SubmitBtnBlock>
        </Form>
      </Content>
    </Container>
  </>
);

JoinPresenter.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  st: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  married: PropTypes.bool.isRequired,
  kids_under12: PropTypes.bool.isRequired,
  register_year: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default JoinPresenter;
