import React, { useState } from "react";

// assets
import back from "../../assets/back_icon.png";

// packages
import axios from "axios";

// styles
import * as D from "./style";

// components
import Headline from "../../components/headline";
import NavBar from "../../components/navbar";
import history from "../../history";

const DriverList = () => {
  const [users, setUsers] = useState([]);

  function getUsers() {
    const list = [];
    axios.get("/driver").then(res => {
      res.data.map(c => list.push(c.email + " "));
      setUsers(list);
    });
  }

  console.log(users);
  return (
    <React.Fragment>
      <D.Header>
        <D.BackButton onClick={() => history.push("/Home")}>
          <D.Icon src={back} />
        </D.BackButton>
        <Headline />
      </D.Header>
      {/* <NavBar /> */}
      <D.Container>
        <D.Button onClick={getUsers}>Show Users</D.Button>

        <p>{users}</p>
      </D.Container>
    </React.Fragment>
  );
};

export default DriverList;
