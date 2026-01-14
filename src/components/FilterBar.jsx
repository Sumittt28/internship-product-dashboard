import React from 'react';
import '../App.css';

const FilterBar = ({ brands, categories, onFilterChange }) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Filter by Category:</label>
        <select 
          name="category" 
          onChange={(e) => onFilterChange('category', e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Filter by Brand:</label>
        <select 
          name="brand" 
          onChange={(e) => onFilterChange('brand', e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;