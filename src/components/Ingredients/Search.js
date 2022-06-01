import React, { useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [filterInput,setFilterInput] =useState('');
  const onType= (e) =>{
    setFilterInput(e.target.value);

  }
  return (
    <section className="search">
      <Card>    
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={onType} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
