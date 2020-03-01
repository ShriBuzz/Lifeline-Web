import React from "react";

import logo from "../../assets/logo.png";

import * as H from "./styles";

export const Headline = () => {
  return (
    <H.Container>
      <H.Logo alt="Lifeline logo" src={logo} />
      <H.HeaderText>Lifeline App Signup Portal</H.HeaderText>
    </H.Container>
  );
};

export default Headline;
