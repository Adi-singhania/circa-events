import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { validateEmail } from '../../../utils/validators';
import { useToast } from '../../../context/ToastContext';
import styles from './Footer.module.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) {
      setError(err);
      return;
    }

    setError('');
    setIsSubscribed(true);
    showToast('Subscribed to the CIRCA Gazette dispatches!', 'success');
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.container}`}>
        {/* Top Section: Newsletter and Brand Bio */}
        <div className={styles.topGrid}>
          <div className={styles.bioCol}>
            <div className={styles.kicker}>THE CIRCA DISPATCH</div>
            <h3 className={styles.tagline}>
              A broadside record of salons, workshops, acoustic explorations, and print symposiums.
            </h3>
            <p className={styles.description}>
              Printed quarterly in limited broadsheet editions, and published here for public reservation. Curated with reverence for living craft, typography, and acoustic traditions.
            </p>
          </div>

          <div className={styles.newsletterCol}>
            <div className={styles.kicker}>SUBSCRIBE TO PRINT NOTICES</div>
            <p className={styles.newsletterText}>
              Receive notice of newly released programmes 48 hours before public door tickets open. No spam, just editorial dispatches.
            </p>

            {isSubscribed ? (
              <div className={styles.subscribedBox}>
                <Check size={18} className={styles.checkIcon} />
                <span>You are registered for the next dispatch bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.form} noValidate>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className={`${styles.input} ${error ? styles.inputError : ''}`}
                    aria-label="Email address for dispatch newsletter"
                  />
                  <button type="submit" className={styles.submitBtn} aria-label="Subscribe to dispatch">
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </button>
                </div>
                {error && <p className={styles.errorText} role="alert">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Middle Section: Directory Links */}
        <div className={styles.linksGrid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>PROGRAMME</h4>
            <ul className={styles.linkList}>
              <li><Link to="/events?category=Music">Music & Soundscapes</Link></li>
              <li><Link to="/events?category=Design+%26+Tech">Design & Typography</Link></li>
              <li><Link to="/events?category=Art+%26+Culture">Art & Architecture</Link></li>
              <li><Link to="/events?category=Food+%26+Culinary">Ferment & Gastronomy</Link></li>
              <li><Link to="/events?free=true">Free Community Gatherings</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>COMMUNITY & PASSES</h4>
            <ul className={styles.linkList}>
              <li><Link to="/my-registrations">My Passes & Bookings</Link></li>
              <li><a href="/#how-it-works">How Registration Works</a></li>
              <li><a href="/#stats">Attendance Ledger</a></li>
              <li><a href="#accessibility">Accessibility Charter</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>EDITORIAL GUILD</h4>
            <ul className={styles.linkList}>
              <li><a href="#propose">Propose a Gathering</a></li>
              <li><a href="#press">Press Broadside Kit</a></li>
              <li><a href="#colophon">Typography & Colophon</a></li>
              <li><a href="#contact">Curator Inquiries</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>COLOPHON</h4>
            <p className={styles.colophonText}>
              Typeset in <em>Fraunces</em> optical serif and <em>DM Sans</em>. Bound in warm rag paper palettes. Crafted for deep inquiry and public gathering.
            </p>
          </div>
        </div>

        {/* Oversized Brand Display */}
        <div className={styles.giantBrand}>
          CIRCA
        </div>

        {/* Bottom Bar: Copyright & Metadata */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; 2026 CIRCA Cultural Forum &amp; Broadside Press. All rights reserved.
          </div>
          <div className={styles.bottomMeta}>
            <span>DELHI &bull; MUMBAI &bull; BENGALURU &bull; KOCHI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
