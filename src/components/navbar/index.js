import React from "react";

import * as N from "./styles";

const NavBar = () => {
  return (
    <N.Container>
      <N.LeftContainer>
        <N.Link>Driver Signup</N.Link>
      </N.LeftContainer>
      <N.RightContainer>
        <N.Link>Traffic Signup</N.Link>
      </N.RightContainer>
    </N.Container>
  );
};

export default NavBar;
