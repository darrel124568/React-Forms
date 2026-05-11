import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";



function ItemForm({setItems}) {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  function handleSubmit(e) {
  e.preventDefault()
  const newItem = {name, category}
  setItems(prev => [...prev, newItem])
}

function handleNameChange(e) {
  setName(e.target.value)
}

function handleCategoryChange(e) {
 setCategory(e.target.value)
}

  return (
    <form className="NewItem" onSubmit={e => handleSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => handleNameChange(e)} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => handleCategoryChange(e)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}


export default ItemForm;