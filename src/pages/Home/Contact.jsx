import { useState } from 'react';
import axios from "axios";
import Botpoison from "@botpoison/browser";

import FontAwesomeIcons from '../../components/Icons/FontAwesomeIcons';
import InfoRow from '../../components/InfoRow/InfoRow';
import DateTime from '../../components/DateTime/DateTime';

import { introLinks, contactInfo, FORMSPARK_ACTION_URL, BOTPOISON_PUBLIC_KEY } from '../../constants/misc';

const botpoison = new Botpoison({
  publicKey: BOTPOISON_PUBLIC_KEY,
});

function Contact() {
  /* ----------------------------- FORM FUNCTIONS ----------------------------- */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const { solution } = await botpoison.challenge();
    await axios.post(FORMSPARK_ACTION_URL, {
      name,
      email,
      subject,
      message,
      _botpoison: solution,
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
                icon="envelope"
                title="Email"
                content={contactInfo[0].item}
              />
              <InfoRow 
                icon="location-dot"
                title="Location"
                content={contactInfo[1].item}
              />
              <InfoRow 
                icon="clock"
                title="Time"
                content={<DateTime />}
              />
            </div>
            <h2>Socials</h2>
            <div className="contact-socials">
              <a href={introLinks[1].link} title={introLinks[1].id} target="_blank" rel="noreferrer">
                <FontAwesomeIcons icon="github" />
              </a>
              <a href={introLinks[2].link} title={introLinks[2].id} target="_blank" rel="noreferrer">
                <FontAwesomeIcons icon="linkedin" />
              </a>
            </div>
          </div>

          {/* ------------------------------ CONTACT FORM ------------------------------ */}
          <div className="form-container">
            <form 
              onSubmit={onSubmit}
              target="_blank"
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
                <button type="submit">Send Message <FontAwesomeIcons icon="paper-plane" /></button>
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