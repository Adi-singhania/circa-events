import React from 'react';
import styles from './MarqueeStrip.module.css';

export const MarqueeStrip = () => {
  const items = [
    'Letterpress & Typography',
    'Modular Synthesis & Ambient Sound',
    'Wild Fermentation & Foraged Yeasts',
    '16mm Guerilla Celluloid',
    'Brutalist Architecture & Theory',
    'Indigo & Myrobalan Natural Dyes',
    'Carnatic Mridangam & Tala',
    'Single-Estate Coffee Cupping',
    'Anagama Wood-Fired Ceramics',
    'Baul Folk Philosophy',
    'South Asian Graphic Novels',
    'Koodiyattam Sanskrit Gesture Theatre'
  ];

  return (
    <div className={styles.marqueeWrap} aria-label="Curated Disciplines Marquee" role="region">
      <div className={styles.track}>
        {/* Double array for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className={styles.item}>
            <span className={styles.bullet}>&bull;</span>
            <span className={styles.text}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
