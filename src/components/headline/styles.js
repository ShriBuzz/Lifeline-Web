// package
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  background-color: #f53d3d;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 85px;
  height: 85px;
  margin-left: 1.8em;
  margin-right: 1.4em;
`;

export const HeaderText = styled.p`
  color: white;
  font-size: 1.6em;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 2em;
  justify-content: space-between;
`;

export const Link = styled.button`
  border: none;
  border-style: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.6s;
  :hover {
    color: rgba(255, 255, 255, 1);
    font-size: 1.4em;
  }
`;
