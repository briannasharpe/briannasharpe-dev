import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InfoRow from '../modules/InfoRow/InfoRow';
import DateTime from '../modules/DateTime/DateTime';

import { introLinks, contactInfo } from '../constants';

function Contact() {
  return(
    <>
      <section id="contact" className="contact-container">
        <div className="contact-header">
          <h1>Let's Connect</h1>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="row">
              <InfoRow 
                icon="fa-solid fa-envelope"
                title="Email"
                content={contactInfo[0].item}
              />
              <InfoRow 
                icon="fa-solid fa-location-dot"
                title="Location"
                content={contactInfo[1].item}
              />
              <InfoRow 
                icon="fa-solid fa-clock"
                title="Time"
                content={<DateTime />}
              />
            </div>
            <h2>Socials</h2>
            <div className="contact-socials">
              <a href={introLinks[0].link} title={introLinks[0].id} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                  
                </a>
                <a href={introLinks[1].link} title={introLinks[1].id} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
            </div>
          </div>

          {/* </div> */}
          {/* ------------------------------ CONTACT FORM ------------------------------ */}
          <div className="form-container">
            <form>
              {/* --------------------------- FORM LABELS (hide) --------------------------- */}
                {/* <label htmlFor="name">name<span>*</span></label>
                <label htmlFor="email">email address<span>*</span></label>
                <label htmlFor="subject">subject</label>
                <label htmlFor="message">message<span>*</span></label> */}
                <input type="text" name="name" id="name" placeholder="Name*" required />
                <input type="email" name="email" id="email" placeholder="Email address*" required />
                <input type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea name="message" rows="6" id="message" placeholder="Message*" required />
                <div className="form-submit">
                  <button type="submit">Send Message <FontAwesomeIcon icon="fa-solid fa-paper-plane" /></button>
                </div>
            </form>
          {/* <p>Send an <span>email</span> instead.</p> */}
          </div>
          {/* ------------------------------ CONTACT FORM ------------------------------ */}
        </div>
      </section>
    </>
  );
}

export default Contact;