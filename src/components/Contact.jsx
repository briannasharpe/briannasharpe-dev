import Button from '../modules/Button/Button';

function Contact({ currentTheme }) {
// function Contact() {
  return(
    <>
      <section id="contact" className="contact-container">
        <div className="contact-header">
          <h1>Let's Connect</h1>
        </div>
        <div className="form-container">
          <form>
            {/* <div className="form-row">
            </div> */}
            <div className="input-group">
              <label htmlFor="name">name<span>*</span></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">email address<span>*</span></label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="subject">subject</label>
              <input type="text" name="subject" id="subject"/>
            </div>
            <div className="input-group">
              <label htmlFor="message">message<span>*</span></label>
              <textarea name="message" rows="6" id="message" required />
            </div>
            {/* <div className="subject">
            </div>
            <div className="message">
            </div> */}
            {/* <Button 
              link="/"
              text="Send Message"
              title="send message"
              icon="fa-solid fa-paper-plane"
              /> */}
              <div className="form-submit">
                <button type="submit">Send Message <i className="fa-solid fa-paper-plane"></i></button>
              </div>
          </form>
        <p>Send an <span>email</span> instead.</p>
        </div>
      </section>
    </>
  );
}

export default Contact;