import React from "react";
import "../asset/Style/ContactPage/contact.css";
const ContactMePage = () => {
  return (
    <React.Fragment>
      <section className="FlexCenter Contact">
        <h1>ContactMe</h1>
        <div className="Card">
          <div className="Section">
            <h1>I would like to hear from you</h1>
            <p>Made with ❤️</p>
          </div>
          <div className="Section2">
            <h1>Connect with me on </h1>
            <div className="SocialMedia">
              <a href="https://www.instagram.com/invites/contact/?=8xqkt1kh3gt&utm_content=cdnjx65">
                Instagram
              </a>
              <a href="https://wa.me/917017337726">Whatsapp</a>
              <a href="https://github.com/RehanAli357">Github</a>
              <a href="https://www.linkedin.com/in/rehan-ali-b97964247">
                LinkedIn
              </a>
            </div>
            <h1>Reach Me through</h1>
            <div className="SocialMedia2">
              <a className="one" href="mailto:mohdrehanali40@gmail.com">Email</a>
              <a className="" href="tel:7017337726">Contact Number</a>
              <a className="" href="https://www.google.com/maps?q=27.1504934,78.0606074">
                My Location
              </a>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactMePage;
