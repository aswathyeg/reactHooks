import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../Styles.css";
const Home = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const newValue = value.find((i) => i.id === editId);
      const updatedValue = value.map((t) =>
        t.id === newValue.id
          ? (t = { id: t.id, state })
          : { id: t.id, state: t.state }
      );
      setValue(updatedValue);
      setState("");
      setEditId(0);
      return;
    }
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
      <form onClick={handleSubmit}>
        <input
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </form>
      <button type="submit">{editId ? "Edit" : "Go"}</button>
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
    </Container>
  );
};

export default Home;
