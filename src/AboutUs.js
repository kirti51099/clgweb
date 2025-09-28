import React from "react";
import "./AboutUs.css";
import campusImage from "./campus.jpg"; // Replace with your image

function AboutUs() {
  return (
    <div className="about-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li className="active">About Us</li>
          <li>Vision & Mission</li>
          <li>Hon. Chairman’s Message</li>
          <li>Hon. Trustee Message</li>
          <li>Executive Director</li>
          <li>Principal’s Message</li>
          <li>Deans</li>
          <li>Board Trustee</li>
          <li>Statutory Committees</li>
          <li>Non-statutory Committees</li>
          <li>HR Manual</li>
          <li>Good Governance Document</li>
          <li>Policy Documents</li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="about-content">
        <h1>About Us</h1>
        <img src={campusImage} alt="Campus" className="campus-img" />
        <p>
          <strong>D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur</strong> is a
          self-financing Autonomous Institute established in 1990 under the
          visionary leadership of <strong>Dr. John Doe</strong>. Approved by
          AICTE, New Delhi and affiliated to XYZ University, our institute is
          accredited with an 'A' Grade by NAAC.
        </p>
        <p>
          We offer a wide range of undergraduate and postgraduate programmes,
          along with research centres recognised by the University.
        </p>
        <h3>Salient features of our institute are</h3>
        <ul className="features-list">
          <li>✅ State of the art infrastructure</li>
          <li>✅ Wi-Fi enabled campus</li>
          <li>✅ Laboratories with latest technologies</li>
          <li>✅ 24-hour Internet connectivity</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
