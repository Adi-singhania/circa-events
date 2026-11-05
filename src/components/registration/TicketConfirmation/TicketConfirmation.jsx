import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Download, Ticket, ArrowRight, MapPin, Check } from 'lucide-react';
import { formatDateFull, formatTimeRange } from '../../../utils/dateUtils';
import { generateIcsFile } from '../../../utils/icsGenerator';
import { triggerBrandConfetti } from '../../../utils/confetti';
import styles from './TicketConfirmation.module.css';

export const TicketConfirmation = ({ registration, event, onClose }) => {
  useEffect(() => {
    triggerBrandConfetti();
  }, []);

  const handleDownloadIcs = () => {
    generateIcsFile(event, registration);
  };

  return (
    <div className={styles.confirmationWrap}>
      {/* Animated Checkmark */}
      <div className={styles.checkHeader}>
        <div className={styles.checkCircle}>
          <svg className={styles.checkSvg} viewBox="0 0 52 52">
            <circle className={styles.checkCirclePath} cx="26" cy="26" r="23" fill="none" />
            <path className={styles.checkMarkPath} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <div className={styles.kicker}>OFFICIAL CONFIRMATION &bull; DISPATCH ALLOCATED</div>
        <h3 className={styles.confirmTitle}>Pass Reserved Successfully!</h3>
        <p className={styles.confirmSub}>
          Your seat has been reserved in the official community ledger. An archival confirmation has been recorded in your local passbook.
        </p>
      </div>

      {/* Broadside Perforated Ticket Stub */}
      <div className={styles.ticketStub}>
        <div className={styles.stubTop}>
          <div className={styles.stubHeader}>
            <span className={styles.stubBrand}>CIRCA PASSBOOK</span>
            <span className={styles.bookingRefBadge}>{registration.bookingRef}</span>
          </div>

          <h4 className={styles.eventTitle}>{registration.eventTitle}</h4>

          <div className={styles.eventDetailsGrid}>
            <div className={styles.detailCol}>
              <span className={styles.metaLabel}>DATE &amp; TIME</span>
              <span className={styles.metaValue}>
                {formatDateFull(registration.eventDate)} &bull; {registration.eventTime}
              </span>
            </div>
            <div className={styles.detailCol}>
              <span className={styles.metaLabel}>VENUE</span>
              <span className={styles.metaValue}>{registration.eventVenue}</span>
            </div>
            <div className={styles.detailCol}>
              <span className={styles.metaLabel}>ATTENDEE</span>
              <span className={styles.metaValue}>{registration.fullName}</span>
            </div>
            <div className={styles.detailCol}>
              <span className={styles.metaLabel}>ALLOCATION</span>
              <span className={styles.metaValue}>
                {registration.ticketsCount} Ticket{registration.ticketsCount > 1 ? 's' : ''} ({registration.totalPrice === 0 ? 'Free Entry' : `₹${registration.totalPrice}`})
              </span>
            </div>
          </div>
        </div>

        {/* Perforation Line with Side Notches */}
        <div className={styles.perforationWrap}>
          <div className={`${styles.notch} ${styles.notchLeft}`} />
          <div className={styles.dashedRule} />
          <div className={`${styles.notch} ${styles.notchRight}`} />
        </div>

        <div className={styles.stubBottom}>
          <div className={styles.barcodeSection}>
            <div className={styles.fauxBarcode} aria-hidden="true">
              {Array.from({ length: 34 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i % 3 === 0 ? '3px' : i % 2 === 0 ? '1px' : '2px',
                    height: '32px',
                    backgroundColor: 'var(--text-ink)',
                    display: 'inline-block'
                  }}
                />
              ))}
            </div>
            <span className={styles.barcodeText}>{registration.bookingRef}</span>
          </div>
          <div className={styles.timestamp}>
            REGISTERED: {new Date(registration.registeredAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionRow}>
        <button
          type="button"
          onClick={handleDownloadIcs}
          className={styles.icsButton}
        >
          <Download size={16} />
          <span>Add to Calendar (.ics)</span>
        </button>

        <Link
          to="/my-registrations"
          className={styles.myPassesButton}
          onClick={onClose}
        >
          <Ticket size={16} />
          <span>View My Passes</span>
        </Link>

        <Link
          to="/events"
          className={styles.browseButton}
          onClick={onClose}
        >
          <span>Browse More Events</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
