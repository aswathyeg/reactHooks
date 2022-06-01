import React, { useState } from 'react';
import './IngredientForm.css';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredients = ingredient =>{ //title and amount
    
    setIngredients(prevIngredient =>
      [...prevIngredient,
        {id:Math.random().toString(),...ingredient}]
    );

  };
  const removeHandler = ingredientId => {
    setIngredients(prevIngredient => 
      prevIngredient.filter(ingredient => ingredient.id !==ingredientId));//filter-if the function returns true, that item will remains, if false, that item get deleted
    

  }

  return (
    <div className="App">
      <IngredientForm  addIngredients={addIngredients}/> {/*will get input from this component */}

      <section className="ingredient-form">
        <Search />
        <IngredientList ingredients = {ingredients} onRemove= {removeHandler} />
        {/* output */}
      </section>
    </div>
  );
}

export default Ingredients;
