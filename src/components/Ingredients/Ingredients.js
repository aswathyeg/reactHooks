import React, { useCallback, useEffect, useState } from "react";
import "./IngredientForm.css";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const identifier in responseData) {
          loadedIngredients.push({
            id: identifier,
            amount: responseData[identifier].amount,
            title: responseData[identifier].title,
          });
        }
        setIngredients(loadedIngredients);
        console.log(loadedIngredients);
      });
  }, []);
  const addIngredients = (ingredient) => {
    //title and amount
    fetch(
      "https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      //promise-will not execute immediatly, only when above code done
      setIngredients((prevIngredient) => [
        ...prevIngredient,
        { id: Math.random().toString(), ...ingredient },
      ]);
    });
  };
  const removeHandler = (ingredientId) => {
    fetch(
      `https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json `,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setIngredients((prevIngredient) =>
        prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
      ); //filter-if the function returns true, that item will remains,
      //if false, that item get deleted
      // ingredient(placeholder) -is an object ,
    });
  };
  const onLoadIngredients = useCallback((filteredIngredients) => {
    //useCallback prevents rerendering
    setIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm addIngredients={addIngredients} />{" "}
      {/*will get input from this component .passing callback function here*/}
      <section className="ingredient-form">
        <Search filteredIngredientHandler={onLoadIngredients} />
        <IngredientList ingredients={ingredients} onRemove={removeHandler} />
        {/* output */}
      </section>
    </div>
  );
};

export default Ingredients;
