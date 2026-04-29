import { Sparkles, Utensils, Brain } from "lucide-react";

import "../styles/method.css";
function Method() {
  return (
    <section id="method" className="method">
      <div className="method-container">
        <h2>The Mindful Hormone Method</h2>
        <p className="method-subtext">
          A clinical framework designed to stabilize your hormones and
          revitalize your energy without the stress of traditional dieting.
        </p>

        <div className="method-cards">
          <div className="method-card">
            <div className="icon-box">
              <Sparkles size={28} />
            </div>
            <h3>Root Cause Focus</h3>
            <p>
              We look beyond symptoms to address insulin resistance and systemic
              inflammation through clinical diagnostics.
            </p>
          </div>

          <div className="method-card">
            <div className="icon-box">
              <Utensils size={28} />
            </div>
            <h3>Cultural Nutrition</h3>
            <p>
              No bland salads. We integrate traditional meals like roti and
              sabzi into a balanced, hormone-friendly framework.
            </p>
          </div>

          <div className="method-card">
            <div className="icon-box">
              <Brain size={28} />
            </div>
            <h3>Mindful Habits</h3>
            <p>
              Breaking the binge-restrict cycle by building intuitive eating
              skills and stress management techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Method;
