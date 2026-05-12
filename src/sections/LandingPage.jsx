import "../styles/landingPage.css";
// import photo from "../assets/photo.jpg";
import myPortfolioPhoto from "../assets/myPortfolioPhoto.jpeg";

function LandingPage() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <p className="hero-tag">CLINICAL NUTRITION & WELLNESS</p>

          <h1>
            Struggling with PCOS, <br />
            weight gain & constant <br />
            cravings?
          </h1>

          <p className="hero-subtext">
            Reclaim your hormonal health through evidence-based nutrition that
            doesn’t feel like a punishment. Professional care met with
            personalized empathy.
          </p>

          <a
            href="#contact"
            className="hero-btn"
            onClick={() =>
              window.open(
                "https://calendly.com/pamnanivanshita/15min",
                "_blank",
              )
            }>
            Book Free Hormone Check-In
          </a>

          <div className="hero-trust">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Trusted by 100+ women on their hormone journey</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={myPortfolioPhoto} alt="dietitian" />
        </div>
      </div>
    </section>
  );
}
export default LandingPage;
