import React, { useState } from "react";

const undergradPrograms = [
  {
    title: "Bachelor of Engineering (B.E.) in Computer Science",
    description:
      "Focuses on algorithms, data structures, software engineering, and AI.",
  },
  {
    title: "Bachelor of Engineering (B.E.) in Electronics & Telecommunication",
    description:
      "Covers digital communication, signal processing, and embedded systems.",
  },
  {
    title: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
    description: "Mechanical systems, thermodynamics, and manufacturing.",
  },
  {
    title: "Bachelor of Engineering (B.E.) in Civil Engineering",
    description:
      "Design and construction of infrastructure including buildings and bridges.",
  },
];

const postgradPrograms = [
  {
    title: "Master of Engineering (M.E.) in Computer Science",
    description:
      "Advanced topics in machine learning, cloud computing, and cybersecurity.",
  },
  {
    title: "Master of Engineering (M.E.) in VLSI Design",
    description:
      "Deep dive into chip design, verification, and fabrication processes.",
  },
  {
    title: "Master of Business Administration (MBA)",
    description:
      "Business and management studies tailored for engineering professionals.",
  },
];

const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Research in deep learning, natural language processing, and robotics.",
  },
  {
    title: "Renewable Energy Systems",
    description:
      "Innovations in solar, wind, and sustainable energy technologies.",
  },
  {
    title: "Robotics and Automation",
    description:
      "Developing autonomous systems for manufacturing and daily use.",
  },
];

function Academics() {
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderPrograms = (programs) =>
    programs.map((program, index) => (
      <div
        key={index}
        className="program-card"
        onClick={() => handleToggle(index)}
        tabIndex={0}
        role="button"
        aria-expanded={expandedIndex === index}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle(index);
          }
        }}
      >
        <h4>{program.title}</h4>
        {expandedIndex === index && <p>{program.description}</p>}
      </div>
    ));

  return (
    <section className="academics-container">
      <h2>Academics</h2>
      <p>
        At D.Y.Patil College of Engineering & Technology, we offer diverse
        academic programs to prepare students for thriving careers.
      </p>

      <div className="tabs">
        <button
          className={activeTab === "undergraduate" ? "active" : ""}
          onClick={() => {
            setActiveTab("undergraduate");
            setExpandedIndex(null);
          }}
        >
          Undergraduate Programs
        </button>
        <button
          className={activeTab === "postgraduate" ? "active" : ""}
          onClick={() => {
            setActiveTab("postgraduate");
            setExpandedIndex(null);
          }}
        >
          Postgraduate Programs
        </button>
        <button
          className={activeTab === "research" ? "active" : ""}
          onClick={() => {
            setActiveTab("research");
            setExpandedIndex(null);
          }}
        >
          Research & Development
        </button>
      </div>

      <div className="program-list">
        {activeTab === "undergraduate" && renderPrograms(undergradPrograms)}
        {activeTab === "postgraduate" && renderPrograms(postgradPrograms)}
        {activeTab === "research" && renderPrograms(researchAreas)}
      </div>
    </section>
  );
}

export default Academics;
