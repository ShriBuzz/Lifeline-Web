// package
import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d23a3a;
  border: 1px solid white;
  a {
    color: white;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5252;
  border: 1px solid white;
  transition: 0.8s;
  a {
    color: #ebc1c1;
  }
  :hover {
    background-color: #d23a3a;
    a {
      color: white;
    }
  }
`;

export const Link = styled.a`
  font-size: 22px;
  padding: 28px 300px;
  cursor: pointer;
`;
