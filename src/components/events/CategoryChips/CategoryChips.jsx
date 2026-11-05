import React from 'react';
import { EVENT_CATEGORIES } from '../../../data/events';
import styles from './CategoryChips.module.css';

export const CategoryChips = ({ selectedCategory, onSelectCategory, categoryCounts }) => {
  return (
    <div
      id="categories"
      className={styles.scrollContainer}
      role="tablist"
      aria-label="Filter events by discipline category"
    >
      <div className={styles.chipsRow}>
        {EVENT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = categoryCounts ? categoryCounts[cat] || 0 : 0;

          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`${styles.chip} ${isSelected ? styles.chipActive : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              <span className={styles.catLabel}>{cat}</span>
              <span className={styles.countBadge}>{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
