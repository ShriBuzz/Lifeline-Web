// package
import styled from "styled-components";

import background from "../../assets/bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2em;
  justify-content: flex-start;
  font-size: 18px;
  background-image: url(${background});
  background-repeat: no-repeat;
  /* background-position: 0; */
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
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(239, 64, 35, 0.4);
    background-color: #ff482a;
  }
`;
