import { useState } from "react";
import { faqs } from "../../data/faqs";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section">
      <div className="container-narrow">
        <SectionHeader label="FAQ" title="Common Questions" center />

        <ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openId === faq.id ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">+</span>
                </button>
                <div id={`faq-answer-${faq.id}`} className="faq-answer" role="region">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
