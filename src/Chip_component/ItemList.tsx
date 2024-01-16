// ItemList.tsx
import React from 'react';

// Define the expected props for the ItemList component
interface ItemListProps {
  items: { id: number; name: string; photo: string }[];
  onItemClick: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onItemClick }) => {
   // Render a list of items with click event handlers
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          <img src={item.photo} alt={item.name} />
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
