import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light paper theme' : 'Switch to dark soot theme'}
      title={isDark ? 'Switch to light paper theme' : 'Switch to dark soot theme'}
    >
      <div className={`${styles.iconWrap} ${isDark ? styles.isDark : ''}`}>
        <Sun className={styles.sunIcon} size={18} strokeWidth={1.75} />
        <Moon className={styles.moonIcon} size={18} strokeWidth={1.75} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
