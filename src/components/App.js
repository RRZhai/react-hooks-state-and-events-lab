import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = (e) => {
    setDarkMode(currentMode => !currentMode)
  }
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"
  const buttonText = darkMode ? "Light" : "Dark"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonText} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
