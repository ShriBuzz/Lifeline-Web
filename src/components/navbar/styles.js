// package
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? "#ff5252" : "#d23a3a")};
  border: 1px solid white;
  color: white;
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? "#d23a3a" : "#ff5252")};
  border: 1px solid white;
  transition: 0.8s;
  color: #ebc1c1;
  :hover {
    background-color: #d23a3a;
    color: white;
  }
`;

export const Link = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;
