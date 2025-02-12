import React from "react"

const FilterOptions = ({ filters, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    onFilterChange({ ...filters, [name]: value })
  }

  return (
    <div className="filter-options">
      <h3>Filter Options</h3>
      <div className="filter-group">
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={filters.make}
          onChange={handleInputChange}
          placeholder="Enter make"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
          placeholder="Min price"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
          placeholder="Max price"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="minRange">Min Range:</label>
        <input
          type="number"
          id="minRange"
          name="minRange"
          value={filters.minRange}
          onChange={handleInputChange}
          placeholder="Min range"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="maxRange">Max Range:</label>
        <input
          type="number"
          id="maxRange"
          name="maxRange"
          value={filters.maxRange}
          onChange={handleInputChange}
          placeholder="Max range"
        />
      </div>
    </div>
  )
}

export default FilterOptions;

