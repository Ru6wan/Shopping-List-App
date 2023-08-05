import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <AddItem addItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
};

export default App;

