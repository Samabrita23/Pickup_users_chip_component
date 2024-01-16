// Chip.tsx
import React from 'react';
import '../styles/Chip.css';

interface ChipProps {
  id: number;
  label: string;
  photo: string;
  onRemove: (id: number) => void;
}

const Chip: React.FC<ChipProps> = ({ id, label, photo, onRemove }) => {
  return (
    <div className="chip">
      <img src={photo} alt={label} className="chip-photo" />
      <span>{label}</span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
};


export default Chip;
