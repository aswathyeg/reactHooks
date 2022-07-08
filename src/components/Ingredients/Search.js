import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    fetch(
      "https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
      });
  }, []);
  const [filterInput, setFilterInput] = useState("");
  const onType = (e) => {
    setFilterInput(e.target.value);
  };
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={onType} value={enteredFilter} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
