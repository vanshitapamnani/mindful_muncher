import photoB from "../assets/photoB.jpg";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={photoB} alt="Vanshita Dietitian" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-text">
          <h2>Hi, I’m Vanshita, Clinical Dietitian</h2>

          <p>
            With years of clinical experience, I specialize in helping women
            manage PCOS and hormonal imbalances through mindful nutrition. My
            approach isn’t about restriction; it’s about restoration.
          </p>

          <p>
            I believe that food is medicine, but it should also be a source of
            joy. Together, we’ll build a sustainable lifestyle that honors your
            body’s unique needs.
          </p>

          {/* <a href="#contact" className="about-link">
            Learn more about my journey →
          </a> */}
        </div>
      </div>
    </section>
  );
}
export default About;
