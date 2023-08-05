import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() !== '') {
      addItem(item);
      setItem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Add item to the list"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
