import React, { useState } from "react";
import { Container, FormControl, Navbar } from "react-bootstrap";
import "../Styles.css";
const Home = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setValue([{ id: `${state}-${Date.now()}`, state }, ...value]);
  };

  return (
    <Container className="home">
      <Navbar.Text>
        <FormControl
          onChange={(e) => {
            setState(e.target.value);
          }}
        ></FormControl>
      </Navbar.Text>
      <button onClick={handleClick}>Go</button>

      <span>
        <ul>
          {value.map((c) => (
            <li>{c.state}</li>
          ))}
        </ul>
      </span>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </Container>
  );
};

export default Home;
