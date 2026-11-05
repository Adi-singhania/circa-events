import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className={styles.accordionWrap}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className={styles.questionText}>{item.question || item.q}</span>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
              />
            </button>

            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
            >
              <div className={styles.answerInner}>
                <p>{item.answer || item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
