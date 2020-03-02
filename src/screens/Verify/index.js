import React, { useState } from "react";

import * as V from "./styles";

const Verify = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <V.Container>
      <V.LoginContainer>
        <V.Header>Lifeline Admin Login</V.Header>
        <V.LoginRow>
          <V.LoginLabel>Username</V.LoginLabel>
          <V.LoginInput
            type="text"
            value={name}
            placeholder="Admin username..."
            onChange={e => setName(e.target.value)}
          />
        </V.LoginRow>
        <V.LoginRow>
          <V.LoginLabel>Password</V.LoginLabel>
          <V.LoginInput
            type="password"
            value={password}
            placeholder="Admin password..."
            onChange={e => setPassword(e.target.value)}
          />
        </V.LoginRow>
        <V.Button type="submit">Login</V.Button>
      </V.LoginContainer>
    </V.Container>
  );
};

export default Verify;
