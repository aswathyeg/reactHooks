import React, { useState }  from "react";
import './IngredientForm.css';
import Card from '../UI/Card.css';

    const IngredientForm = React.memo(props =>{  // to prevent unwanted rerendering
      
      const [title,setTitle] = useState('');
      const [amount,setInputAmount] = useState('');
      

  
        const submitForm =(e)=>{
          e.preventDefault();
          props.addIngredients({
            title:title,
            amount:amount
          });

        }
        const getName =(e) =>{
          setTitle(e.target.value);
        
               
        }
        const getAmount =(e) =>{
          setInputAmount(e.target.value);
        }

    return(
     

      <section className="ingredient-form">

        <form onSubmit={submitForm} >

          <div className="form-control">
            <label>Name</label>
            <input type="text"
            id="title"
            value={title}
            onChange={getName} />
          </div>
          <div className="form-control">
            <label>Amount</label>
            <input type="number"
            id="amount"
           
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
