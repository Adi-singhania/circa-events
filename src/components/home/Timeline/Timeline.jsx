import React from 'react';
import styles from './Timeline.module.css';

export const Timeline = () => {
  const steps = [
    {
      num: '01',
      kicker: 'SURVEY & SCRUTINISE',
      title: 'Inspect the Gazette & Select Your Subject',
      desc: 'Browse our seasonal broadside catalogue of independent gatherings. Filter by craft discipline, date, or city. Each gathering dossier discloses exact schedules, guest practitioners, venue coordinates, and remaining seat counts.'
    },
    {
      num: '02',
      kicker: 'ENTER THE REGISTRY',
      title: 'Claim Your Seat in the Community Ledger',
      desc: 'Submit your reservation in under two minutes with zero advertising trackers. Our validation confirms instant seat allocation directly in your browser. No duplicate bookings, no phantom waiting rooms.'
    },
    {
      num: '03',
      kicker: 'WALK IN WITH PROOF',
      title: 'Receive Your Archival Pass & Step Inside',
      desc: 'Download your RFC 5545 calendar invitation (.ics) and view your persistent ticket pass in My Registrations. Present your unique booking reference at the venue doors for effortless entry.'
    }
  ];

  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="timeline-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.kicker}>THE PROTOCOL</div>
          <h2 id="timeline-heading" className={styles.title}>
            How Reservation Works
          </h2>
          <p className={styles.subtitle}>
            A streamlined, paper-inspired registration process respecting your attention and dignity.
          </p>
        </div>

        {/* Numbered Vertical Timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.verticalSpine} aria-hidden="true" />

          {steps.map((step, idx) => (
            <div key={step.num} className={styles.stepRow}>
              <div className={styles.nodeColumn}>
                <div className={styles.numberBadge}>
                  <span className={styles.numText}>{step.num}</span>
                </div>
              </div>

              <div className={styles.bodyColumn}>
                <div className={styles.stepKicker}>{step.kicker}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
