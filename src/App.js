import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import EVList from "./components/EVList"
import EVDetails from "./components/EVDetails"
import AboutToLaunch from "./components/AboutToLaunch"
import UploadContent from "./components/UploadContent"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Electric Vehicle Info Hub</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/evs">EV List</Link>
              </li>
              <li>
                <Link to="/upcoming">About to Launch</Link>
              </li>
              <li>
                <Link to="/upload">Upload Content</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evs" element={<EVList />} />
            <Route path="/evs/:id" element={<EVDetails />} />
            <Route path="/upcoming" element={<AboutToLaunch />} />
            <Route path="/upload" element={<UploadContent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

