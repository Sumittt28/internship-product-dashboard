import React from 'react';
import '../App.css';

const FilterBar = ({ 
  brands, 
  categories, 
  onFilterChange, 
  onReset, 
  selectedCategory, 
  selectedBrand 
}) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Filter by Category:</label>
        <select 
          name="category" 
          value={selectedCategory}
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
          value={selectedBrand}
          onChange={(e) => onFilterChange('brand', e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <button className="reset-btn" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBar;