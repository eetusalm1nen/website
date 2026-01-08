import LinkedinLogo from '../images/LinkedInLogo.svg';
import InstagramLogo from '../images/InstagramLogo.svg';

function WhoAmI() {
  return (
    <section className="whoami-section">
      <h2> Whoami<span className="red-question">?</span></h2>

      <p>
        I'm a curious and creative project-driven person who enjoys working both independently and as part of a team.
        Currently pursuing a Bachelor's degree in IT with a minor in Industrial Engineering at the University of Turku.
      </p>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/eetusalminen22333/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={LinkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>

        <a href="https://www.instagram.com/salmineneetu/">
          <img src={InstagramLogo} alt="Instagram" className="social-icon" />
        </a>

        <a 
          href="/CV EETU SALMINEN EN.pdf.pdf" 
          download="CV EETU SALMINEN EN.pdf.pdf" 
          className="cv-button"
            >
        Download my CV
    </a>

      </div>
    </section>
  )
}

export default WhoAmI;
