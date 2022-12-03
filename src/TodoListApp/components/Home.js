import React, { useState } from "react";
import { Container, FormControl, Navbar } from "react-bootstrap";
import "../Styles.css";
const Home = () => {
  const [state, setState] = useState();
  const [value, setValue] = useState([]);
  const handleClick = () => {
    setValue(state);
  };
  let arr = [
    {
      id: 1,
      name: "a",
    },
    {
      id: 2,
      name: "b",
    },
    {
      id: 3,
      name: "c",
    },
  ];

  return (
    <Container className="home">
      <Navbar.Text>
        <FormControl
          onChange={(e) => {
            setState(e.target.value);
          }}
        ></FormControl>
        <br></br>
        <button onClick={handleClick}>Add</button>
        <br></br>
        <span>
          {value.map((c) => {
            return <div>{c}</div>;
          })}
        </span>
      </Navbar.Text>
      {arr.map((item) => {
        return <div key={item.id}>{item.name},</div>;
      })}
    </Container>
  );
};

export default Home;
