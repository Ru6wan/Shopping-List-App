import React from 'react';

const ShoppingList = ({ items }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
