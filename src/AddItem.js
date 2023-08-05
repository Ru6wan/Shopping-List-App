import React, { useState } from 'react';

const AddItem = ({ items, addItem }) => {
  // State to track the item being added to the shopping list
  const [item, setItem] = useState('');

  // State to manage the confirmation dialog for duplicate items
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // Function to handle adding an item to the shopping list
  const handleAddItem = () => {
    // Check if the item already exists in the list
    if (items.includes(item)) {
      // Show the confirmation dialog for duplicate items
      setShowConfirmation(true);
    } else {
      // Add the item to the shopping list and reset the input field
      addItem(item);
      setItem('');
    }
  };

  // Function to handle confirming the addition of a duplicate item
  const handleConfirm = () => {
    // Add the item to the shopping list and reset the input field
    addItem(item);
    setItem('');
    setShowConfirmation(false); // Close the confirmation dialog
  };

  // Function to handle canceling the addition of a duplicate item
  const handleCancel = () => {
    // Reset the input field and close the confirmation dialog
    setItem('');
    setShowConfirmation(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddItem();
      }}
    >
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Add item to the list"
      />
      <button type="submit">Add</button>
      {showConfirmation && (
        // Show the confirmation dialog if a duplicate item is being added
        <div>
          <p>Are you sure you want to add a duplicate item?</p>
          <button type="button" onClick={handleConfirm}>
            Yes
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default AddItem;
