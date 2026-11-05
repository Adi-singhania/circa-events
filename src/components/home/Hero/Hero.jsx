import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ticket, Compass, CalendarClock } from 'lucide-react';
import { useCountdown } from '../../../hooks/useCountdown';
import styles from './Hero.module.css';

export const Hero = ({ nextEvent }) => {
  // Nearest upcoming event countdown
  const targetDate = nextEvent?.date || '2026-11-08';
  const targetTime = nextEvent?.startTime || '19:00';
  const countdown = useCountdown(targetDate, targetTime);

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        {/* Editorial Notice Header */}
        <div className={styles.topNotice}>
          <span className={styles.volTag}>VOL. IX &bull; ISSUE 26</span>
          <span className={styles.separator}>/</span>
          <span className={styles.editionTag}>OFFICIAL BROADSHEET GAZETTE</span>
          <span className={styles.separator}>/</span>
          <span className={styles.statusTag}>DOORS OPEN FOR REGISTRATION</span>
        </div>

        <div className={styles.mainGrid}>
          {/* Left Column: Huge Editorial Headline & CTAs */}
          <div className={styles.contentCol}>
            <h1 className={styles.headline}>
              Curated salons &amp; festivals for the{' '}
              <span className={styles.highlightWord}>
                uncommon
                <svg
                  className={styles.handUnderline}
                  viewBox="0 0 280 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13C65 4.5 175 2 277 11C210 6 120 7.5 45 15"
                    stroke="var(--accent-vermilion)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              mind.
            </h1>

            <p className={styles.subline}>
              Step beyond homogeneous conferences. CIRCA presents a hand-curated ledger of typographic symposiums, quadraphonic soundscapes, wild culinary ferments, and celluloid cinema screenings across India.
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <Link to="/events" className={styles.primaryCta}>
                <span>Explore Programme</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              <a href="#how-it-works" className={styles.secondaryCta}>
                <span>How Registration Works</span>
              </a>
            </div>

            {/* Live Countdown to Nearest Event */}
            {nextEvent && (
              <div className={styles.countdownBanner}>
                <div className={styles.countdownHeader}>
                  <CalendarClock size={16} className={styles.clockIcon} />
                  <span className={styles.countdownLabel}>NEXT GATHERING: {nextEvent.title}</span>
                </div>
                <div className={styles.tickerBoxes}>
                  <div className={styles.tickerUnit}>
                    <span className={styles.tickerVal}>{String(countdown.days).padStart(2, '0')}</span>
                    <span className={styles.tickerSub}>DAYS</span>
                  </div>
                  <span className={styles.colon}>:</span>
                  <div className={styles.tickerUnit}>
                    <span className={styles.tickerVal}>{String(countdown.hours).padStart(2, '0')}</span>
                    <span className={styles.tickerSub}>HRS</span>
                  </div>
                  <span className={styles.colon}>:</span>
                  <div className={styles.tickerUnit}>
                    <span className={styles.tickerVal}>{String(countdown.minutes).padStart(2, '0')}</span>
                    <span className={styles.tickerSub}>MIN</span>
                  </div>
                  <span className={styles.colon}>:</span>
                  <div className={styles.tickerUnit}>
                    <span className={styles.tickerVal}>{String(countdown.seconds).padStart(2, '0')}</span>
                    <span className={styles.tickerSub}>SEC</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Collage of 3 Overlapping Ticket Stubs */}
          <div className={styles.collageCol} aria-hidden="true">
            <div className={styles.collageContainer}>
              {/* Card 1: Letterpress (Top Left tilted -4deg) */}
              <div className={`${styles.ticketCard} ${styles.ticketOne}`}>
                <div className={styles.ticketImageWrap}>
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                    alt=""
                    className={styles.ticketImg}
                  />
                  <div className={styles.ticketOverlay} />
                </div>
                <div className={styles.ticketBody}>
                  <div className={styles.ticketDate}>10 NOV &bull; DELHI</div>
                  <div className={styles.ticketTitle}>Typographic Salon &amp; Letterpress</div>
                  <div className={styles.ticketPerforation} />
                  <div className={styles.ticketMeta}>
                    <span>PASS #0482</span>
                    <span className={styles.ticketBadge}>RESERVED</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Modular Sound (Bottom Center tilted +3deg) */}
              <div className={`${styles.ticketCard} ${styles.ticketTwo}`}>
                <div className={styles.ticketImageWrap}>
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                    alt=""
                    className={styles.ticketImg}
                  />
                  <div className={styles.ticketOverlay} />
                </div>
                <div className={styles.ticketBody}>
                  <div className={styles.ticketDate}>08 NOV &bull; MUMBAI</div>
                  <div className={styles.ticketTitle}>Monsoon Drone &amp; Modular Synthesis</div>
                  <div className={styles.ticketPerforation} />
                  <div className={styles.ticketMeta}>
                    <span>PASS #0119</span>
                    <span className={styles.ticketBadgeVermilion}>FINAL SEATS</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Ferment Gathering (Top Right tilted -2deg) */}
              <div className={`${styles.ticketCard} ${styles.ticketThree}`}>
                <div className={styles.ticketImageWrap}>
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                    alt=""
                    className={styles.ticketImg}
                  />
                  <div className={styles.ticketOverlay} />
                </div>
                <div className={styles.ticketBody}>
                  <div className={styles.ticketDate}>15 NOV &bull; BENGALURU</div>
                  <div className={styles.ticketTitle}>Wild Fermentation &amp; Yeasts</div>
                  <div className={styles.ticketPerforation} />
                  <div className={styles.ticketMeta}>
                    <span>PASS #0941</span>
                    <span className={styles.ticketBadge}>CONFIRMED</span>
                  </div>
                </div>
              </div>

              {/* Graphic Stamp Badge in Center */}
              <div className={styles.sealStamp}>
                <Ticket size={20} className={styles.sealIcon} />
                <span className={styles.sealText}>CIRCA PASSBOOK &bull; 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
