import React from "react";
import { useState } from 'react'

function Item({ name, category }) {
  const [addedItem, setAdd] = useState(false)
  const addCart = () => {
    setAdd(added => !added)
  }
  const colorChange = addedItem ? 'remove' : 'add'
  const textChange = addedItem ? 'Remove From Cart' : 'Add to Cart'

  return (
    <li className={addedItem ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addCart} className={colorChange}>{textChange}</button>
    </li>
  );
}

export default Item;
