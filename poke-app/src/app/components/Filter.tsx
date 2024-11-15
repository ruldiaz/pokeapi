// src/app/components/Filter.tsx

import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: { name: string; type: string }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
    onFilterChange({ name: e.target.value, type: typeFilter });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFilter(e.target.value);
    onFilterChange({ name: nameFilter, type: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={nameFilter}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Filtrar por tipo"
        value={typeFilter}
        onChange={handleTypeChange}
      />
    </div>
  );
};

export default Filter;
