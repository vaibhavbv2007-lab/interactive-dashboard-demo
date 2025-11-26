import React from 'react';

const Filters = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="filters">
            <label htmlFor="filter">Filter: </label>
            <input 
                type="text" 
                id="filter" 
                onChange={handleFilterChange} 
                placeholder="Type to filter..." 
            />
        </div>
    );
};

export default Filters;