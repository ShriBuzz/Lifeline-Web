import React, { useState, useRef } from "react";

// package
import axios from "axios";

// styles
import * as D from "./styles.js";

const DriverSignup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [driver_id, setDriverId] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();

  const inputRef = useRef();

  function resetForm() {
    setName("");
    setContact();
    setContact("");
    setEmail("");
    setDriverId("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`/driver_signup`, {
        // data to be sent
        name,
        email,
        password,
        driver_id,
        contact
      })
      .then(response => {
        console.log(response.data);
        resetForm();
        alert("Thank You for registering as an Ambulance Driver!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <D.Container>
      <D.Header>Lets get you registered for Lifeline Driver App!</D.Header>
      <D.FormContainer ref={inputRef} onSubmit={e => handleSubmit(e)}>
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
          <D.InputLabel>Driver Id</D.InputLabel>
          <D.FormInput
            type="text"
            value={driver_id}
            placeholder="Enter your Driver id/Licence no..."
            onChange={e => setDriverId(e.target.value)}
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

        <D.FormRow>
          <D.FormInput type="file" onChange={e => setFile(e.target.files[0])} />
          <button>Upload</button>
        </D.FormRow>

        <D.Button type="submit">Submit</D.Button>
      </D.FormContainer>
    </D.Container>
  );
};

export default DriverSignup;
