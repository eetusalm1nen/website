import GituhubLogo from '../images/GitHubLogo.svg'
import React, { useState, useEffect } from 'react'


function Projects() {

  const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
    fetch('http://localhost:3001/api/clicks')
      .then(res => res.json())
      .then(data => setClickCount(data.count))
      .catch(err => console.error('Virhe haussa:', err))
  }, [])


  const handleClick = () => {

      fetch('http://localhost:3001/api/clicks', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => setClickCount(data.newCount))
      .catch(err => console.error('Virhe klikkauksessa:', err))
  }

    return (
        <section className="projects-section">
        <h2>Projects<span className="red-question">:</span></h2>
        <h3 className='personalws'>
          Personal web site (this one)
        </h3>
          <ul className="irl-list">
            <li><small>Simple dynamic web page for personal use. Code on GitHub .</small></li>  
          </ul>
        
      
          <h3>School projects</h3>
          <ul className="irl-list">
            <li><small>Few of the most meaningful coding projects on GitHub.</small></li>
            <li><small>Bachelor's Thesis: Utilizing Modern Mobile Network Technologies in Production Line Digital Twins (In Finnish).</small></li>
          </ul>
         

          <h3>Other</h3>
          <ul className="irl-list">
            <li><small>Co-founder & Head of Partnerships of Root.</small></li>
            <a href="https://rootexpo.fi" className="red-question">Root Expo</a>
            <li><small>Boost Turku | Board '26.</small></li>
            <a href="https://www.boostturku.com/" className="red-question">Boost Turku</a>
          </ul>

      
          <h3>Raspberry Pi</h3>
          <ul className="irl-list">
            <li><small>Smart mirror using MagicMirror.</small></li>
            <li><small>Custom webhooks for automated notifications. Code on GitHub.</small></li>
            <li><small>Adblocker using Pi-hole.</small></li>
          </ul>
         

          <br />

          <span className="project-text">My Github:</span>
          <a href="https://github.com/eetusalm1nen">
            <img src={GituhubLogo} alt="GitHub" className="social-icon" />
          </a>
        
          <br />
          <br />

    {/*
          <span>Psst.. backend is feeling kinda useless rn. By pressing this button you can make it feel important: </span> 
            <button className="click-button" onClick={handleClick}>  
            {clickCount}
            </button>
      */}
      
      </section>
    )
}

export default Projects;
