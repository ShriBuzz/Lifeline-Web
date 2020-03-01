// package
import styled from "styled-components";

import background from "../../assets/bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 2em;
  justify-content: center;
  font-size: 18px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw;
`;

export const Header = styled.p`
  font-size: 1.3em;
  color: #9d9c9c;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

export const FormRow = styled.div`
  width: 62vh;
  flex-direction: row;
  margin-bottom: 1.5em;
`;

export const FormInput = styled.input`
  float: right;
  margin-bottom: 1em;
  text-align: center;
  padding: 0.5em;
  border-bottom: 1px solid #d23a3a;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 300px;
`;

export const InputLabel = styled.label`
  font-size: 1em;
  color: #d23a3a;
`;

export const Button = styled.button`
  width: 150px;
  color: white;
  background-color: #ef4023;
  border-style: none;
  border-radius: 2em;
  padding: 0.8em;
`;
