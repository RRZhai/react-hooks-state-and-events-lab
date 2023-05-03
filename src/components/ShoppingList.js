import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {
  const [selected, setChange] = useState("All")

  const handleChange = (e) => {
    const value = e.target.value
    setChange(value)
  }

  const fileredItems = items.filter(item => {
    return selected === "All" ? true : item.category === selected
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {fileredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
