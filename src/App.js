import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';
import './styles.css';

const App = () => {
  // State to keep track of the shopping list items
  const [items, setItems] = useState([]);

  // State to track whether the app is in dark mode or light mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to add an item to the shopping list
  const addItem = (item) => {
    setItems([...items, item]);
  };

  // Function to toggle between dark mode and light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on the body element
  };

  return (
    <div>
      {/* Button to toggle dark mode */}
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      {/* AddItem and ShoppingList components */}
      <AddItem items={items} addItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
};

export default App;
