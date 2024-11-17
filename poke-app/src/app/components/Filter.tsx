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

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value);
    onFilterChange({ name: nameFilter, type: e.target.value });
  };

  return (
    <div className="filter" style={{textAlign:"center", paddingBottom:"10px"}}>
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={handleNameChange}
        style={{padding:"10px"}}
      />
      <select value={typeFilter} onChange={handleTypeChange} style={{padding:"10px"}}>
        <option value="">All types</option>
        <option value="fire">Fuego</option>
        <option value="water">Agua</option>
        <option value="grass">Planta</option>
        <option value="electric">Eléctrico</option>
        <option value="psychic">Psíquico</option>
        <option value="ice">Hielo</option>
        <option value="dragon">Dragón</option>
        <option value="dark">Siniestro</option>
        <option value="fairy">Hada</option>
        <option value="normal">Normal</option>
        <option value="fighting">Lucha</option>
        <option value="flying">Volador</option>
        <option value="poison">Veneno</option>
        <option value="ground">Tierra</option>
        <option value="rock">Roca</option>
        <option value="bug">Bicho</option>
        <option value="ghost">Fantasma</option>
        <option value="steel">Acero</option>
      </select>
    </div>
  );
};

export default Filter;
