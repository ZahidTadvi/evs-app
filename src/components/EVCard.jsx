import React from "react"

const EVCard = ({ ev }) => {
  return (
    <div className="ev-card">
      <img src={ev.image || "/placeholder.svg"} alt={`${ev.make} ${ev.model}`} className="ev-image" />
      <h2>
        {ev.make} {ev.model}
      </h2>
      <p>Year: {ev.year}</p>
      <p>Range: {ev.range} miles</p>
      <p>Price: ${ev.price.toLocaleString()}</p>
    </div>
  )
}

export default EVCard;

