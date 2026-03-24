import GituhubLogo from '../images/GitHubLogo.svg'
import React, { useState, useEffect } from 'react'

function Projects({ projects }) {
  const [clickCount, setClickCount] = useState(0)

// Funktio, joka renderöi projektit kategorioittain
const renderCategory = (categoryName) => {
  // Suodatetaan projektit halutun kategorian mukaan ja mapataan ne listaksi
  return projects && projects
    .filter(proj => proj.category === categoryName)
    .map((proj, index) => (
      <li key={index}>
        <small>
          {proj.url ? (
            <a 
              href={proj.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-text-link"
            >
              {proj.description}
            </a>
          ) : (
            proj.description
          )}
        </small>
      </li>
    ));
};

  return (
    // Projektit-osio, joka hakee projektit backendistä ja näyttää ne kategorioittain listattuna
    <section className="projects-section">
      <h2>Projects<span className="red-question">:</span></h2>
      
      <h3>Other</h3>
      <ul className="irl-list">
        {renderCategory("Other")}
      </ul>

      <h3 className='personalws'>Personal</h3>
      <ul className="irl-list">
        {renderCategory("Personal")}
      </ul>
      
      <h3>University</h3>
      <ul className="irl-list">
        {renderCategory("University")}
      </ul>

      <br />
      <span className="project-text">My Github:</span>
      <a href="https://github.com/eetusalm1nen">
        <img src={GituhubLogo} alt="GitHub" className="social-icon" />
      </a>
      <br /><br />
    </section>
  )
}

export default Projects;