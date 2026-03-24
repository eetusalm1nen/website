function Contact( { contactText, contactSecondary } ) {
    return (
      // Yhteystiedot-osio, joka hakee tekstit backendistä ja näyttää ne sivulla
        <section className="Reach-me">
        <h2>Contact me<span className="red-question">!</span></h2>
        <p> {contactText} </p>

        <p> {contactSecondary} </p>

        <footer className="footer">
          <p>With love <span className="red-question">~</span>Eetu</p>
        </footer>
      </section>
    )
}

export default Contact;