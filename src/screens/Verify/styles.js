// package
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f1f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.form`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2em;
  box-shadow: 7px 10px 51px -11px rgba(0, 0, 0, 0.72);
`;

export const Header = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: #f53d3d;
  margin: 1em 0;
`;

export const LoginRow = styled.div`
  text-align: left;
  flex-direction: row;
  margin-bottom: 1.5em;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginInput = styled.input`
  float: right;
  margin-bottom: 1em;
  text-align: center;
  padding: 0.5em;
  border-bottom: 1px solid #d23a3a;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 300px;
`;

export const LoginLabel = styled.label`
  font-size: 1em;
  color: #d23a3a;
  margin-right: 1em;
`;

export const Button = styled.button`
  width: 150px;
  color: rgba(255, 255, 255, 0.8);
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
