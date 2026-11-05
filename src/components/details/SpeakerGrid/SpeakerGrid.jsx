import React from 'react';
import styles from './SpeakerGrid.module.css';

export const SpeakerGrid = ({ speakers }) => {
  if (!speakers || speakers.length === 0) return null;

  return (
    <div className={styles.grid}>
      {speakers.map((spk, idx) => (
        <div key={idx} className={styles.speakerCard}>
          <div className={styles.avatarWrap}>
            <img
              src={spk.avatar}
              alt={spk.name}
              className={styles.avatar}
              loading="lazy"
            />
          </div>
          <div className={styles.info}>
            <h4 className={styles.name}>{spk.name}</h4>
            <div className={styles.role}>{spk.role}</div>
            <div className={styles.company}>{spk.company}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
