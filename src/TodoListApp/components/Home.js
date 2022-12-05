import React, { useState } from "react";
import { Container, FormControl, Navbar } from "react-bootstrap";
import "../Styles.css";
const Home = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state !== "") {
      // setValue([{ id: `${state}-${Date.now()}`, state }, ...value]);
      setValue([{ id: `${state}-${Date.now()}`, state }, ...value]);
      setState("");
    }
  };

  const handleEdit = (id) => {
    const valueToEdit = value.find((i) => i.id === id);
    setState(valueToEdit.state);
    setEditId(id);
  };
  const handleDelete = (id) => {
    const valueToDelete = value.filter((d) => d.id !== id);
    setValue([...valueToDelete]);
  };

  return (
    <Container className="home">
      <Navbar.Text>
        <FormControl
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        ></FormControl>
      </Navbar.Text>
      <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>

      <span>
        <ul>
          {value.map((c) => (
            <li key={c.id}>
              {c.state}
              <button
                onClick={() => {
                  handleEdit(c.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(c.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </span>
      <div></div>
    </Container>
  );
};

export default Home;
