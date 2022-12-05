import React, { useState } from "react";
import { Container, FormControl, Navbar } from "react-bootstrap";
import "../Styles.css";
const Home = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    // setValue([{ id: `${state}-${Date.now()}`, state }, ...value]);
    setValue([{ id: `${state}-${Date.now()}`, state }, ...value]);
  };
  const handleEdit = () => {};
  const handleDelete = () => {};

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
            <li>
              {c.state}
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </li>
          ))}
        </ul>
      </span>
      <div></div>
    </Container>
  );
};

export default Home;
