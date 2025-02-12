import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import evData from "../data/evData.json"
import FilterOptions from "./FilterOptions"



const EVList = () => {
  const [evs, setEvs] = useState([])
  const [filteredEvs, setFilteredEvs] = useState([])
  const [filters, setFilters] = useState({
    make: "",
    minPrice: "",
    maxPrice: "",
    minRange: "",
    maxRange: "",
  })

  useEffect(() => {
    setEvs(evData)
    setFilteredEvs(evData)
  }, [])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (currentFilters) => {
    const filtered = evs.filter((ev) => {
      return (
        (currentFilters.make === "" || ev.make.toLowerCase().includes(currentFilters.make.toLowerCase())) &&
        (currentFilters.minPrice === "" || ev.price >= Number.parseInt(currentFilters.minPrice)) &&
        (currentFilters.maxPrice === "" || ev.price <= Number.parseInt(currentFilters.maxPrice)) &&
        (currentFilters.minRange === "" || ev.range >= Number.parseInt(currentFilters.minRange)) &&
        (currentFilters.maxRange === "" || ev.range <= Number.parseInt(currentFilters.maxRange))
      )
    })
    setFilteredEvs(filtered)
  }
  
    const navigate = useNavigate();
  return (
    <div className="ev-list-container">
      <FilterOptions filters={filters} onFilterChange={handleFilterChange} />
      <div className="ev-list">
        {filteredEvs.map((ev) => (
          <div key={ev.id} className="ev-card">
            <img src={ev.image || "/placeholder.svg"} alt={`${ev.make} ${ev.model}`} className="ev-image" />
            <h2>
              {ev.make} {ev.model}
            </h2>
            <p>Year: {ev.year}</p>
            <p>Range: {ev.range} miles</p>
            <p>Price: ${ev.price.toLocaleString()}</p>
            {/* <Link to={`/evs/${ev.id}`} className="details-button"> View Details </Link> */}
            
            <button
      className="details-button"
      onClick={() => navigate(`/evs/${ev.id}`)}
    >
      View Details
    </button>

          </div>
        ))}
      </div>
    </div>
  )
}
export default EVList;