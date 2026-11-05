import React from 'react';
import styles from './Skeleton.module.css';

export const EventCardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton} aria-hidden="true">
      <div className={styles.imageShimmer} />
      <div className={styles.contentWrap}>
        <div className={styles.topRow}>
          <div className={`${styles.line} ${styles.badgeLine}`} />
          <div className={`${styles.line} ${styles.stampLine}`} />
        </div>
        <div className={`${styles.line} ${styles.titleLine}`} />
        <div className={`${styles.line} ${styles.titleLine2}`} />
        <div className={`${styles.line} ${styles.metaLine}`} />
        <div className={styles.bottomRow}>
          <div className={`${styles.line} ${styles.priceLine}`} />
          <div className={`${styles.line} ${styles.btnLine}`} />
        </div>
      </div>
    </div>
  );
};
