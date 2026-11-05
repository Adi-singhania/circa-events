import React from 'react';
import { RotateCcw, Compass } from 'lucide-react';
import styles from './EmptyState.module.css';

export const EmptyState = ({ message = 'Nothing here yet. Try another keyword.', onReset }) => {
  return (
    <div className={styles.emptyContainer} role="status">
      <div className={styles.stampBadge}>
        <Compass size={28} className={styles.icon} strokeWidth={1.5} />
      </div>
      <h3 className={styles.title}>No Happenings Found</h3>
      <p className={styles.message}>{message}</p>
      {onReset && (
        <button type="button" onClick={onReset} className={styles.resetBtn}>
          <RotateCcw size={16} />
          <span>Reset All Filters</span>
        </button>
      )}
    </div>
  );
};
