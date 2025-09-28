import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import collegeLogo from "./college_logo.jpeg";
import AboutUs from "./AboutUs";
import VirtualTour from "./VirtualTour";
import Academics from "./Academics";

function Home() {
  return (
    <main className="main-content">
      {/* Welcome */}
      <section className="welcome" id="welcome">
        <h2>WELCOME</h2>
        <p>
          <strong>My College of Engineering & Technology</strong> is a
          self-financing Autonomous Institute established in 1990. The
          institution is approved by the All India Council for Technical
          Education.
        </p>
        <Link to="/virtual-tour" className="btn">
          Virtual Institute Tour
        </Link>
      </section>

      {/* News */}
      <section className="news" id="news">
        <h2>LATEST NEWS & EVENTS</h2>
        <div className="news-item">
          <img src="https://via.placeholder.com/50" alt="news" />
          <p>Free vaccination drive starting soon.</p>
        </div>
        <div className="news-item">
          <img src="https://via.placeholder.com/50" alt="news" />
          <p>Tech Fest 2025 coming soon!</p>
        </div>
      </section>

      {/* Notice Board */}
      <section className="notice" id="notice">
        <h2>NOTICE BOARD</h2>
        <div className="tabs">
          <button className="active">Students</button>
          <button>Staff</button>
        </div>
        {/* Changed from <a href="#"> to button to avoid accessibility warning */}
        <button
          className="btn"
          onClick={() => alert("Internal Notice for Students clicked!")}
          aria-label="Internal Notice for Students"
        >
          Internal Notice for Students - Click Here
        </button>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <img src={collegeLogo} alt="College Logo" className="logo" />
            <div>
              <h1>D.Y.Patil College of Engineering & Technology</h1>
              <p>
                Approved by AICTE, Recognised by Govt. | Affiliated to XYZ
                University
              </p>
            </div>
          </div>
          <div className="header-right">
            <img
              src="https://via.placeholder.com/40"
              alt="accreditation"
              className="badge"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="accreditation"
              className="badge"
            />
          </div>
        </header>

        {/* Navigation */}
        <nav className="navbar" aria-label="Primary Navigation">
          <Link to="/" aria-current="page">
            Home
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/exam-cell">Exam Cell</Link>
          <Link to="/research">Research</Link>
          <Link to="/department">Department</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/campus-life">Campus Life</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/placement">Placement</Link>
          <Link to="/career">Career</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/academics" element={<Academics />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
