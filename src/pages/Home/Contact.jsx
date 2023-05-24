import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InfoRow from '../../components/InfoRow/InfoRow';
import DateTime from '../../components/DateTime/DateTime';

import { introLinks, contactInfo, FORMSPARK_ACTION_URL } from '../../constants/misc';

function Contact() {
  /* ----------------------------- FORM FUNCTIONS ----------------------------- */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    alert("Form submitted");
  };

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
              <a href={introLinks[1].link} title={introLinks[0].id} target="_blank" rel="noreferrer">
                {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={introLinks[2].link} title={introLinks[1].id} target="_blank" rel="noreferrer">
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* ------------------------------ CONTACT FORM ------------------------------ */}
          <div className="form-container">
            <form 
              onSubmit={onSubmit}
              action={FORMSPARK_ACTION_URL}
            >
              <input type="text" name="name" id="name" placeholder="Name*" required 
                value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" name="email" id="email" placeholder="Email address*" required 
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" name="subject" id="subject" placeholder="Subject" 
                value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea name="message" id="message" rows="6" placeholder="Message*" required 
                value={message} onChange={(e) => setMessage(e.target.value)} />
              <div className="form-submit">
                {/* <button type="submit">Send Message <FontAwesomeIcon icon="fa-solid fa-paper-plane" /></button> */}
                <button type="submit">Send Message <i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
          {/* ------------------------------ CONTACT FORM ------------------------------ */}
        </div>
      </section>
    </>
  );
}

export default Contact;