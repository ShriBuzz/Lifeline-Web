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
  const [upload, setUpload] = useState();

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
    // let file = upload;
    // console.log(file);
    // console.log(file.name);
    // let formdata = new FormData();
    // formdata.append(file, "file");
    // formdata.append("name", "image_send");
    // console.log(formdata);

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
        alert("Successfully registed as an Ambulance driver.");
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleUpload(e) {
    e.preventDefault();
    let file = new FormData();
    file.append("file", upload, upload.name);

    axios
      .post("/file_upload", file, {})
      .then(response => {
        console.log(response.statusText, "Sent image!!!!!");
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
            required
            value={name}
            placeholder="Enter your name..."
            onChange={e => setName(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Email</D.InputLabel>
          <D.FormInput
            type="email"
            required
            value={email}
            placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Contact number</D.InputLabel>
          <D.FormInput
            type="number"
            required
            value={contact}
            placeholder="Enter your contact number..."
            onChange={e => setContact(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Driver Id</D.InputLabel>
          <D.FormInput
            type="text"
            required
            value={driver_id}
            placeholder="Enter your Driver id/Licence no..."
            onChange={e => setDriverId(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.InputLabel>Password</D.InputLabel>
          <D.FormInput
            type="password"
            required
            value={password}
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
          />
        </D.FormRow>

        <D.FormRow>
          <D.FormInput
            type="file"
            name="file"
            onChange={e => setUpload(e.target.files[0])}
          />
          <button onClick={e => handleUpload(e)}>Upload</button>
        </D.FormRow>

        <D.Button type="submit">Submit</D.Button>
      </D.FormContainer>
    </D.Container>
  );
};

export default DriverSignup;
