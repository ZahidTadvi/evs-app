import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import evData from "../data/evData.json"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EVDetails = () => {
  const [ev, setEv] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const selectedEV = evData.find((ev) => ev.id === Number.parseInt(id))
    setEv(selectedEV)
  }, [id])

  if (!ev) {
    return <div>Loading...</div>
  }

  return (
    <div className="ev-details">
      <img src={ev.image || "/placeholder.svg"} alt={`${ev.make} ${ev.model}`} className="ev-image-large" />
      <h2>
        {ev.make} {ev.model}
      </h2>
      <p>Year: {ev.year}</p>
      <p>Range: {ev.range} miles</p>
      <p>Price: ${ev.price.toLocaleString()}</p>
      <Link to="/evs" className="details-button">
       <ChevronLeft className="inline-icon" /> Back to EV List
      </Link>
    </div>
  )
}

export default EVDetails;

