import React from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Zap, Battery, DollarSign, ChevronLeft } from "lucide-react"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Future of Driving</h1>
          <p className="hero-subtitle">Explore our comprehensive Electric Vehicle Info Hub</p>
          <div className="hero-cta">
            <Link to="/evs" className="cta-button">
              Browse EVs <ChevronRight className="inline-icon" />
            </Link>
            <Link to="/upcoming" className="cta-button cta-secondary">
              See Upcoming Models
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/1/2/1201672d62086dfb1f52c0cc66344cb946b8206c07030249c8cd5807a53fbe4c/electric-vehicle-mc-slide4.png"
            alt="Electric car on a road"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Electric?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <Zap className="feature-icon" />
            <h3>Efficient Power</h3>
            <p>Experience instant torque and smooth acceleration</p>
          </div>
          <div className="feature-card">
            <Battery className="feature-icon" />
            <h3>Long Range</h3>
            <p>Go further with improving battery technology</p>
          </div>
          <div className="feature-card">
            <DollarSign className="feature-icon" />
            <h3>Cost Savings</h3>
            <p>Save on fuel and maintenance costs</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title">Ready to Go Electric?</h2>
        <p>Explore our curated list of electric vehicles and find your perfect match.</p>
        <Link to="/evs" className="cta-button">
          View EV Catalog <ChevronRight className="inline-icon" />
        </Link>
      </section>
    </div>
  )
}

export default Home;