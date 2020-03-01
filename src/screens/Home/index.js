import React, { useState } from "react";

// styles
import * as H from "./styles";

// components
import NavBar from "../../components/navbar";
import Headline from "../../components/headline";

// screens
import DriverSignup from "../DriverSignup";
import TraffiSignup from "../TrafficSignup";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  function renderScreen() {
    if (toggle) {
      return <DriverSignup />;
    } else return <TraffiSignup />;
  }

  return (
    <H.Container>
      <Headline />
      <NavBar setToggle={setToggle} />
      {renderScreen()}
    </H.Container>
  );
};

export default Home;
