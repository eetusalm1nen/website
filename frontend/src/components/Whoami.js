import LinkedinLogo from '../images/LinkedInLogo.svg';
import InstagramLogo from '../images/InstagramLogo.svg';

function WhoAmI({ bio, linkedinUrl }) {

  return (
    <section className="whoami-section">
      <h2> Whoami<span className="red-question">?</span></h2>

      <p>
        {/* Jos bio on olemassa, näytetään se. Muuten näytetään oletusteksti. */}
        {bio ? bio : "Ladataan esittelyä..."}
      </p>

      <div className="socials">
        <a
          href={linkedinUrl || "https://www.linkedin.com/in/eetusalminen22333/"}
          target="_blank"
          rel="noopener noreferrer">
          <img src={LinkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>

        <a href="https://www.instagram.com/salmineneetu/">
          <img src={InstagramLogo} alt="Instagram" className="social-icon" />
        </a>

        <a className="cv-button">Download my CV</a>

      </div>
    </section>
  )
}

export default WhoAmI;