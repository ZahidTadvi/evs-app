import React from "react"
import upcomingEvData from "../data/upcomingEvData.json"

const AboutToLaunch = () => {
  return (
    <div className="about-to-launch">
      <h2>Upcoming Electric Vehicles</h2>
      <div className="upcoming-ev-list">
        {upcomingEvData.map((ev) => (
          <div key={ev.id} className="upcoming-ev-card">
            <img src={ev.image || "/placeholder.svg"} alt={`${ev.make} ${ev.model}`} className="ev-image" />
            <h3>
              {ev.make} {ev.model}
            </h3>
            <p>Expected Launch: {ev.expectedYear}</p>
            <p>Estimated Range: {ev.estimatedRange} miles</p>
            <p>Estimated Price: ${ev.estimatedPrice.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutToLaunch; 