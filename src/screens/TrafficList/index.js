import React, { useState } from "react";

// assets
import back from "../../assets/back_icon.png";

// packages
import axios from "axios";

// styles
import * as T from "./style";

// components
import Headline from "../../components/headline";
import history from "../../history";

const TrafficList = () => {
  const [users, setUsers] = useState([]);

  function getUsers() {
    const list = [];
    axios.get("/traffic").then(res => {
      res.data.map(c => list.push(c.email + " "));
      setUsers(list);
    });
  }

  console.log(users);
  return (
    <React.Fragment>
      <T.Header>
        <T.BackButton onClick={() => history.push("/Home")}>
          <T.Icon src={back} />
        </T.BackButton>
        <Headline />
      </T.Header>
      {/* <NavBar /> */}
      <T.Container>
        <T.Button onClick={getUsers}>Show Users</T.Button>

        <p>{users}</p>
      </T.Container>
    </React.Fragment>
  );
};

export default TrafficList;
