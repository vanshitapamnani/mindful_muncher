import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "../styles/FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "Can I eat roti on this plan?",
      answer:
        "Yes! We don’t eliminate traditional foods. We focus on portioning, flour quality, and balancing meals with proteins and fiber.",
    },

    {
      question: "Is this plan suitable for vegetarians?",
      answer:
        "Absolutely. Most plans are designed keeping vegetarian Indian diets in mind while ensuring adequate protein intake.",
    },

    {
      question: "How soon will I see results?",
      answer:
        "Hormonal healing takes time. Most clients notice better energy and reduced cravings within weeks, while deeper changes may take longer.",
    },

    {
      question: "Do you provide medical advice?",
      answer:
        "I provide clinical nutrition guidance that complements your doctor’s treatment and supports lifestyle-based healing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Common Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>

              <ChevronDown
                className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
              />
            </div>

            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
