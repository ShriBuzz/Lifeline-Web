// package
import styled from "styled-components";

import background from "../../assets/bg.png";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BackButton = styled.button`
  border: none;
  border-style: none;
  background-color: #f53d3e;
  cursor: pointer;
  transition: 1s;
  :hover {
    background-color: grey;
  }
`;

export const Icon = styled.img`
  width: 2.7em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  overflow-y: none;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  p {
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 250px;
  color: rgba(255, 255, 255, 0.8);
  background-color: #ef4023;
  border-style: none;
  border-radius: 2em;
  padding: 1em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(239, 64, 35, 0.4);
    background-color: #ff482a;
  }
`;
