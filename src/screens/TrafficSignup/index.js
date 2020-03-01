import React, { useState } from "react";

import * as D from "./styles.js";

const TrafficSignup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, contact, email, password);
  }

  return (
    <D.Container>
      <D.Header>Lets get you registered for Lifeline Traffic App!</D.Header>
      <D.FormContainer onSubmit={e => handleSubmit(e)}>
        <D.FormRow>
          <D.InputLabel>Name</D.InputLabel>
          <D.FormInput
            className="formInput"
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={e => setName(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Email</D.InputLabel>
          <D.FormInput
            className="formInput"
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Contact number</D.InputLabel>
          <D.FormInput
            className="formInput"
            type="number"
            value={contact}
            placeholder="Enter your contact number..."
            onChange={e => setContact(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Password</D.InputLabel>
          <D.FormInput
            className="formInput"
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
          />
        </D.FormRow>

        <D.Button type="submit">Submit</D.Button>
      </D.FormContainer>
    </D.Container>
  );
};

export default TrafficSignup;
