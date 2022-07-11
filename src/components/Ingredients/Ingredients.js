import React, { useCallback, useEffect, useReducer, useState } from "react";
import "./IngredientForm.css";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET": {
      return action.ingredients;
    }
    case "ADD": {
      return [...currentIngredients, action.ingredient];
    }
    case "DELETE": {
      return currentIngredients.filter(
        (ingredients) => ingredients.id !== action.id
      );
    }
    default:
      throw new Error("Should not get get there");
  }
};
const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };

    case "RESPONSE":
      return { ...httpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorData };
    default:
      throw new Error("should not be reached");
  }
};
const Ingredients = () => {
  // const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, httpDispatch] = useReducer(httpReducer, []);

  const [error, setError] = useState();

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
        // setIngredients(loadedIngredients);
        // console.log(loadedIngredients);
      });
  }, []);
  const addIngredients = (ingredient) => {
    //title and amount
    setIsLoading(true);
    fetch(
      "https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      setIsLoading(false);
      //promise-will not execute immediatly, only when above code done
      // setIngredients((prevIngredient) => [
      //   ...prevIngredient,
      //   { id: Math.random().toString(), ...ingredient },
      // ]);
      dispatch({
        type: "ADD",
        ingredient: { id: response.name, ...ingredient },
      });
    });
  };
  const removeHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://react-ingredients-e97be-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json `,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        // setIngredients((prevIngredient) =>
        //   prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
        // ); //filter-if the function returns true, that item will remains,
        //if false, that item get deleted
        // ingredient(placeholder) -is an object ,
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((error) => {
        setError("Somthing went wrong");
      });
  };
  const onLoadIngredients = useCallback((filteredIngredients) => {
    //useCallback prevents rerendering
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);
  const closeHandler = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={closeHandler}>{error}</ErrorModal>}
      <IngredientForm
        addIngredients={addIngredients}
        loading={isLoading}
      />{" "}
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
