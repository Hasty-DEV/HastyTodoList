import React from 'react';

interface FilterProps {
    onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onChange }) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select title="filter" onChange={handleFilterChange}>
            <option value="Todos">Todos</option>
            <option value="Concluídos">Concluídos</option>
            <option value="Pendentes">Pendentes</option>
        </select>
    );
};

export default Filter;
