import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.container}`}>
        <div className={styles.kicker}>ERROR 404 &bull; MISSING PAGE DISPATCH</div>
        <div className={styles.largeNum}>404</div>
        <h1 className={styles.title}>The Stage Has Been Struck.</h1>
        <p className={styles.text}>
          You have wandered into an empty courtyard. Either the gathering has concluded its final movement, or the typesetter dropped a lead slug from the composing stick.
        </p>
        <Link to="/" className={styles.returnBtn}>
          <ArrowLeft size={18} />
          <span>Return to Front Page</span>
        </Link>
      </div>
    </div>
  );
};
