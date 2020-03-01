import React, { useState } from "react";

import * as N from "./styles";

const NavBar = props => {
  const [active, setActive] = useState(true);

  return (
    <N.Container>
      <N.LeftContainer
        onClick={e => {
          e.preventDefault();
          props.setToggle(true);
          setActive(true);
        }}
      >
        <N.Link>Driver Signup</N.Link>
      </N.LeftContainer>
      <N.RightContainer
        onClick={e => {
          e.preventDefault();
          props.setToggle(false);
          setActive(false);
        }}
      >
        <N.Link>Traffic Signup</N.Link>
      </N.RightContainer>
    </N.Container>
  );
};

export default NavBar;
