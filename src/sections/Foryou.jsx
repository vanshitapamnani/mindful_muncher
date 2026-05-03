import "../styles/foryou.css";
import { CheckCircle } from "lucide-react";

function ForYou() {
  return (
    <section className="for-you">
      <div className="for-you-container">
        <h2>Is this for you ?</h2>
        <div className="for-you-list">
          <div className="for-you-item">
            <CheckCircle size={20} />
            <p>You have been diagnosed with PCOS/PCOD and feel overwhelmed.</p>
          </div>
          <div className="for-you-item">
            <CheckCircle size={20} />
            <p>You struggle with irregular cycles or difficult periods.</p>
          </div>

          <div className="for-you-item">
            <CheckCircle size={20} />
            <p>
              You are looking for a sustainable way to manage weight without fad
              diets.
            </p>
          </div>

          <div className="for-you-item">
            <CheckCircle size={20} />
            <p>
              You want clinical guidance that respects your dietary preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForYou;
