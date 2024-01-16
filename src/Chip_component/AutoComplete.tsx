import React, { useState, useRef } from 'react';
import ItemList from './ItemList';
import Chip from './Chip';
import '../styles/AutoComplete.css';

// to define the expected props for the AutoComplete component
interface AutoCompleteProps {
  items: { id: number; name: string; photo: string }[];
}

// to define the shape of an individual selected item
interface SelectedItem {
  id: number;
  name: string;
  photo: string;
}

// define the AutoComplete component
const AutoComplete: React.FC<AutoCompleteProps> = ({ items }) => {
  // State hooks for input value and selected items
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  
  // Ref for accessing the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Event handler when an item is clicked in the ItemList
  const handleItemClick = (id: number) => {
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem) {
      // Add the selected item to the list of selected items and clear the input value
      setSelectedItems([...selectedItems, { id: selectedItem.id, name: selectedItem.name, photo: selectedItem.photo }]);
      setInputValue('');
    }
  };

  // Event handler to remove a selected item (chip)
  const handleChipRemove = (id: number) => {
    // Filter out the selected item with the specified id
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
  };

  // Event handler for input onKeyDown event (e.g., backspace)
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputValue === '' && selectedItems.length > 0) {
      // If Backspace is pressed, input is blank, and there are selected items, remove the last chip
      const lastItemId = selectedItems[selectedItems.length - 1].id;
      handleChipRemove(lastItemId);
    }
  };

  // Render the AutoComplete component
  return (
    <div>
      {/* Display selected items (chips) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {selectedItems.map((selectedItem) => (
          <Chip
            key={selectedItem.id}
            id={selectedItem.id}
            label={selectedItem.name}
            photo={selectedItem.photo}
            onRemove={() => handleChipRemove(selectedItem.id)}
          />
        ))}
      </div>
      
      {/* Input field for adding new users */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Add new user"
        ref={inputRef}
      />
      
      {/* To Display filtered item list based on input value */}
      {inputValue && (
        <ItemList
          items={items.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

export default AutoComplete;
