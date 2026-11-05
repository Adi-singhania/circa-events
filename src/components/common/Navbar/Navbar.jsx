import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Ticket, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useRegistrations } from '../../../context/RegistrationContext';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { registrations } = useRegistrations();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const passesCount = registrations.length;

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navWrapper}`}>
          {/* Brand Wordmark */}
          <Link to="/" className={styles.brand} aria-label="CIRCA Home">
            <span className={styles.wordmark}>CIRCA</span>
            <span className={styles.subMark}>EDITION &bull; 2026</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              Programme
            </NavLink>
            <a href="/#categories" className={styles.navLink}>
              Disciplines
            </a>
            <a href="/#how-it-works" className={styles.navLink}>
              How It Works
            </a>
            <NavLink
              to="/my-registrations"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`
              }
            >
              <Ticket size={16} className={styles.linkIcon} />
              <span>My Passes</span>
              {passesCount > 0 && (
                <span className={styles.countBadge} title={`${passesCount} active pass${passesCount > 1 ? 'es' : ''}`}>
                  {passesCount}
                </span>
              )}
            </NavLink>
          </nav>

          {/* Actions: Theme Toggle & Browse CTA */}
          <div className={styles.actions}>
            <ThemeToggle />
            <Link to="/events" className={styles.ctaBtn}>
              <span>Browse Events</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-In Drawer */}
      <div
        className={`${styles.mobileDrawer} ${isMobileOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <div className={styles.mobileDrawerInner}>
          <div className={styles.mobileHeader}>
            <span className={styles.mobileWordmark}>CIRCA</span>
            <button
              type="button"
              className={styles.mobileCloseBtn}
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className={styles.mobileKicker}>INDEX & DIRECTORY</div>

          <nav className={styles.mobileNavLinks}>
            <NavLink
              to="/"
              className={styles.mobileLink}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={styles.mobileNum}>01</span>
              <span>Home / Overview</span>
            </NavLink>
            <NavLink
              to="/events"
              className={styles.mobileLink}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={styles.mobileNum}>02</span>
              <span>Programme & Catalogue</span>
            </NavLink>
            <a
              href="/#categories"
              className={styles.mobileLink}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={styles.mobileNum}>03</span>
              <span>Disciplines & Categories</span>
            </a>
            <a
              href="/#how-it-works"
              className={styles.mobileLink}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={styles.mobileNum}>04</span>
              <span>How It Works</span>
            </a>
            <NavLink
              to="/my-registrations"
              className={styles.mobileLink}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className={styles.mobileNum}>05</span>
              <span>My Passes ({passesCount})</span>
            </NavLink>
          </nav>

          <div className={styles.mobileFooter}>
            <Link
              to="/events"
              className={styles.mobileCtaBtn}
              onClick={() => setIsMobileOpen(false)}
            >
              <span>Explore All Happenings</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
