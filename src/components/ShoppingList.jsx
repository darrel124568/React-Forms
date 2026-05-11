import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const finalToDisplay = itemsToDisplay.filter(item => {
    if(!query) return true
    else{
      return item.name.toLowerCase().includes(query.toLowerCase())
    }
  }
  )


  return (
    <div className="ShoppingList">
      <ItemForm setItems = {setItems}/>
      <Filter onCategoryChange={handleCategoryChange} setQuery= {setQuery}/>
      <ul className="Items">
        {finalToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;