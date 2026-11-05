import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './StatsCounter.module.css';

const StatItem = ({ endValue, suffix = '', label, sublabel, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(endValue);
      return;
    }

    const duration = 1800; // ms
    const frames = 60;
    const stepTime = duration / frames;
    const increment = endValue / frames;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div className={styles.statBox}>
      <div className={styles.numWrap}>
        <span className={styles.counterNum}>
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.sublabel}>{sublabel}</div>
    </div>
  );
};

export const StatsCounter = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="stats" ref={ref} className={styles.section} aria-label="Community ledger metrics">
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <StatItem
            endValue={18}
            suffix=""
            label="Curated Gatherings"
            sublabel="Across 6 historic hubs"
            isVisible={isIntersecting}
          />
          <StatItem
            endValue={1280}
            suffix="+"
            label="Season Capacity"
            sublabel="Strictly capped for intimacy"
            isVisible={isIntersecting}
          />
          <StatItem
            endValue={100}
            suffix="%"
            label="Independent Guilds"
            sublabel="Direct artist compensations"
            isVisible={isIntersecting}
          />
          <StatItem
            endValue={0}
            suffix=""
            label="Tracker Cookies"
            sublabel="Pure browser local registry"
            isVisible={isIntersecting}
          />
        </div>
      </div>
    </section>
  );
};
