import React from "react";
import { useState } from "react";
import "../styles/ConsumerInfo/FAQ.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className="icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq">
      <h1>About Kangen Water</h1>
      <AccordionItem
        title="What is Kangen Water®?"
        content={
          <>
            <p>Kangen means “return to origin” in Japanese.</p>
            <p>
              Kangen Water® is electrolysed-reduced ionised water created by a
              certified Enagic® Japanese medical grade machine.
            </p>
            <p>
              For 50 years, Kangen Water® has been used in Japan to help restore
              the body to its original, alkaline state.
            </p>
            <p>
              These machines can transform your ordinary tap water into healthy,
              fresh-tasting alkaline drinking water.
            </p>
            <p>Kangen Water® is superior to tap and purified water.</p>
          </>
        }
      />
      <AccordionItem
        title="What are the properties of Kangen Water?"
        content={
          <p>
            Kangen Water® is known for its unique antioxidant properties,
            helping to neutralize free radicals and promote overall health.
          </p>
        }
      />
      <AccordionItem
        title="What are the benefits of Kangen Water®?"
        content={
          <p>
            Kangen Water® helps maintain pH balance, supports hydration, and
            promotes better health by providing high antioxidant alkaline water.
          </p>
        }
      />
      <AccordionItem
        title="Why choose Kangen Water?"
        content={
          <p>
            Choosing Kangen Water® ensures a healthier, more sustainable
            hydration source, improving your well-being and reducing waste.
          </p>
        }
      />
    </div>
  );
};

export default FAQ;
