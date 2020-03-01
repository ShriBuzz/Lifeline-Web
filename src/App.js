import React from "react";

//component
import NavBar from "./components/navbar";
import Headline from "./components/headline";

// screens
import DriverSignup from "./screens/DriverSignup";

function App() {
  return (
    <div>
      <Headline />
      <NavBar />
      <DriverSignup />
    </div>
  );
}

export default App;
