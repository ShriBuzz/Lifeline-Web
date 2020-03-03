import React, { useState } from "react";

// package
import axios from "axios";

// styles
import * as D from "./styles.js";

const TrafficSignup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function resetForm() {
    setName("");
    setContact();
    setContact("");
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`/traffic_signup`, {
        // data to be sent
        name,
        email,
        password,
        contact
      })
      .then(response => {
        console.log(response.data);
        resetForm();
        alert("Successfully registed as Traffic officer.");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <D.Container>
      <D.Header>Lets get you registered for Lifeline Traffic App!</D.Header>
      <D.FormContainer onSubmit={e => handleSubmit(e)}>
        <D.FormRow>
          <D.InputLabel>Name</D.InputLabel>
          <D.FormInput
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={e => setName(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Email</D.InputLabel>
          <D.FormInput
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Contact number</D.InputLabel>
          <D.FormInput
            type="number"
            value={contact}
            placeholder="Enter your contact number..."
            onChange={e => setContact(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Password</D.InputLabel>
          <D.FormInput
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
          />
        </D.FormRow>

        {/* <D.FormRow>
          <D.FormInput
            type="file"
            value={file}
            onChange={e => setFile(e.target.value)}
          />
          <button>Upload</button>
        </D.FormRow> */}

        <D.Button type="submit">Submit</D.Button>
      </D.FormContainer>
    </D.Container>
  );
};

export default TrafficSignup;
