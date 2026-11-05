import React from 'react';
import { SlidersHorizontal, RotateCcw, Check } from 'lucide-react';
import styles from './FilterBar.module.css';

export const FilterBar = ({
  sortOption,
  onSortChange,
  isFreeOnly,
  onToggleFreeOnly,
  totalResults,
  isFiltered,
  onResetFilters
}) => {
  return (
    <div className={styles.bar}>
      <div className={styles.leftMeta}>
        <span className={styles.countText}>
          <strong>{totalResults}</strong> {totalResults === 1 ? 'gathering' : 'gatherings'} catalogued
        </span>
      </div>

      <div className={styles.controlsRow}>
        {/* Free Only Toggle Switch */}
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={isFreeOnly}
            onChange={(e) => onToggleFreeOnly(e.target.checked)}
            className={styles.hiddenCheckbox}
          />
          <div className={`${styles.switchBox} ${isFreeOnly ? styles.switchActive : ''}`}>
            {isFreeOnly && <Check size={12} strokeWidth={3} />}
          </div>
          <span className={styles.switchText}>Free entry only</span>
        </label>

        {/* Sort Select */}
        <div className={styles.sortWrapper}>
          <label htmlFor="sort-select" className={styles.sortLabel}>
            Sort:
          </label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className={styles.select}
          >
            <option value="date-asc">Date &bull; Earliest first</option>
            <option value="date-desc">Date &bull; Latest first</option>
            <option value="name-asc">Title &bull; A to Z</option>
            <option value="seats-desc">Availability &bull; Most seats</option>
          </select>
        </div>

        {/* Reset button if filtered */}
        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className={styles.resetBtn}
            title="Reset search and filters"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
};
