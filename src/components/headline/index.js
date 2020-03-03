import React from "react";

import logo from "../../assets/logo.png";

import * as H from "./styles";

import history from "../../history";

const Headline = () => {
  return (
    <H.Container>
      <H.HeaderContainer>
        <H.Logo alt="Lifeline logo" src={logo} />
        <H.HeaderText>Lifeline App Signup Portal</H.HeaderText>
      </H.HeaderContainer>
      <H.List>
        <H.Link onClick={() => history.push("/Driver_list")}>
          Drivers List
        </H.Link>
        <H.Link onClick={() => history.push("/Traffic_list")}>
          Traffic List
        </H.Link>
      </H.List>
    </H.Container>
  );
};

export default Headline;
