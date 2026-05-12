import "../styles/program.css";
import { Check } from "lucide-react";

const ProgramCard = ({
  title,
  subtitle,
  price,
  duration,
  features,
  buttonText,
  highlight,
}) => {
  return (
    <div className={`program-card ${highlight ? "highlight" : ""}`}>
      {highlight && <div className="badge">MOST POPULAR</div>}

      <h3>{title}</h3>
      <p className="desc">{subtitle}</p>

      <h2>
        ₹{price} <span>/{duration}</span>
      </h2>

      <ul>
        {features.map((item, index) => (
          <li key={index}>
            <Check size={16} /> {item}
          </li>
        ))}
      </ul>

      <button
        className={highlight ? "primary-btn" : "outline-btn"}
        onClick={() =>
          window.open("https://calendly.com/pamnanivanshita/15min", "_blank")
        }>
        {buttonText}
      </button>
    </div>
  );
};

const Programs = () => {
  return (
    <section id="pro" className="programs">
      <div className="programs-container">
        <h2>Hormone Healing Programs</h2>
        <p className="subtext">
          Choose the level of support that fits your current needs.
        </p>

        <div className="programs-grid">
          {/* ₹99 PLAN */}
          <ProgramCard
            title="Check-In Session"
            subtitle="A perfect starting point if you're new or maintaining your progress."
            price="99"
            duration="Session"
            buttonText="Book Session"
            features={[
              "1:1 Hormone Health Check-In",
              "Personalized diet recommendations",
              "Customized diet plan",
              "Do’s & Don’ts + nutrition guidelines",
              "Practical tips & myth-busting insights",
            ]}
          />

          {/* ₹2500 PLAN */}
          <ProgramCard
            title="Transformation"
            subtitle="Structured guidance to help you achieve sustainable results."
            price="2500"
            duration="Month"
            highlight={true}
            buttonText="Start Transformation"
            features={[
              "Bi-weekly 1:1 consultations",
              "Fully personalized diet plan",
              "Continuous plan adjustments",
              "WhatsApp query support",
              "Progress tracking & accountability",
            ]}
          />

          {/* ₹3500 PLAN */}
          <ProgramCard
            title="Premium"
            subtitle="High-touch support for deeper and faster transformation."
            price="3500"
            duration="Month"
            buttonText="Enroll Premium"
            features={[
              "Weekly 1:1 consultations",
              "Regular diet modifications",
              "Meal sharing & feedback (image-based)",
              "Deep-dive sessions for habits & behavior",
              "Priority support",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
