import { Mail, Phone, MapPin } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      {/* CTA SECTION */}
      <section id="contact" className="cta-section">
        <h2>Ready to take control of your hormones?</h2>

        <p>
          Your journey to vibrant health and balanced hormones starts with a
          single mindful step.
          <br />
          Let’s make it together.
        </p>

        <button
          className="cta-btns"
          onClick={() =>
            window.open("https://calendly.com/pamnanivanshita/15min", "_blank")
          }>
          Start Your Transformation Now
        </button>
      </section>

      {/* MAIN FOOTER */}
      <section className="footer-bottom">
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-brand">
            <h3>Mindful Muncher</h3>

            <p>
              Helping women build healthier relationships with food, hormones,
              and their bodies through mindful nutrition.
            </p>

            <div className="footer-socials">
              {/* <a href="#">
                <InstagramIcon size={20} />
              </a> */}

              {/* <a href="#">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-contact">
            <h4>Contact Info</h4>

            <p>
              <Mail size={18} />
              pamnanivanshita@gmail.com
            </p>

            <p>
              <Phone size={18} />
              +91 7042991805
            </p>

            <p>
              <MapPin size={18} />
              Online Consultations Across Countries
            </p>
          </div>

          {/* RIGHT */}
          <div className="footer-links">
            <h4>Legal</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright">
          <p>© 2026 Mindful Muncher. All rights reserved.</p>

          <span>Be a mindful muncher, together.</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
