import React  from "react";
import './IngredientForm.css';
import Card from '../UI/Card.css';

    const IngredientForm = React.memo(props =>{  // to prevent unwanted rerendering
      let name;
      let amount;

  
        const submitForm =(e)=>{
          e.preventDefault();
        }
        const getName =(e) =>{
      name=e.target.value();
      
          
        }
        const getAmount =(e) =>{
          amount=e.target.value();
        }

    return(
     

      <section className="ingredient-form">

        <form onSubmit={submitForm} >
          <div className="form-control">
            <label>Name</label>
            <input type="text"
            onChange={getName} />
          </div>
          <div className="form-control">
            <label>Amount</label>
            <input type="number"
            onChange={getAmount}/>
          </div>
          <div>
            <button>Add Ingredients</button>
          </div>
        </form>
   
        </section>
             
        )
 });

export default IngredientForm;
