import classes from './Contact.module.scss';

function Contact() {
  return(
    <>
    new
      <section id="contact" className="contact-container">
        Contact
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
      </section>
      

    old
      <section id="contact-old" className={classes.contact}>Contact</section>
    </>
  );
}

export default Contact;