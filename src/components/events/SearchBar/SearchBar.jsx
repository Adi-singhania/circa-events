import React from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchBar.module.css';

export const SearchBar = ({ value, onChange, onClear, placeholder = 'Search by event title, venue, or city...' }) => {
  return (
    <div className={styles.searchWrapper}>
      <Search size={18} className={styles.searchIcon} />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label="Search events"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className={styles.clearBtn}
          aria-label="Clear search query"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
