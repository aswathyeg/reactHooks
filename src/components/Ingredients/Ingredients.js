import React, { useState } from 'react';
import './IngredientForm.css';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredients = ingredient =>{ //title and amount
    
    setIngredients(prevIngredient =>
      [...prevIngredient,
        {id:Math.random().toString,...ingredient}]
    )

  }

  return (
    <div className="App">
      <IngredientForm  addIngredients={addIngredients}/> {/*will get input from this component */}

      <section className="ingredient-form">
        <Search />
        <IngredientList ingredients = {ingredients} />
        {/* output */}
      </section>
    </div>
  );
}

export default Ingredients;
