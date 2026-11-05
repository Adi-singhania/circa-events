import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ticket,
  Calendar,
  Clock,
  MapPin,
  Download,
  Trash2,
  ArrowRight,
  AlertTriangle,
  Users
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { formatDateFull } from '../utils/dateUtils';
import { generateIcsFile } from '../utils/icsGenerator';
import { Modal } from '../components/common/Modal/Modal';
import styles from './MyRegistrations.module.css';

export const MyRegistrations = () => {
  const { registrations, cancelRegistration, getEventById } = useRegistrations();
  const [cancelTarget, setCancelTarget] = useState(null);

  const handleConfirmCancel = () => {
    if (cancelTarget) {
      cancelRegistration(cancelTarget.id);
      setCancelTarget(null);
    }
  };

  const handleDownload = (reg) => {
    const event = getEventById(reg.eventId) || {
      id: reg.eventId,
      title: reg.eventTitle,
      date: reg.eventDate,
      startTime: reg.eventTime,
      tagline: 'CIRCA Cultural Gathering',
      venue: { name: reg.eventVenue, address: '', city: '' }
    };
    generateIcsFile(event, reg);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.kicker}>PERSONAL ARCHIVE &bull; REGISTRATION LEDGER</div>
          <h1 className={styles.title}>My Active Passes</h1>
          <p className={styles.subtitle}>
            Your confirmed bookings are maintained directly within your local browser storage. Present your booking reference at the door, or download an iCalendar invite to your phone.
          </p>
        </div>
      </header>

      <main className="container" id="main-content">
        {registrations.length > 0 ? (
          <div className={styles.passesList}>
            <div className={styles.listNotice}>
              <span className={styles.noticeCount}>
                <strong>{registrations.length}</strong> active {registrations.length === 1 ? 'pass' : 'passes'} stored
              </span>
            </div>

            <div className={styles.grid}>
              {registrations.map((reg) => (
                <article key={reg.id} className={styles.ticketCard}>
                  {/* Ticket Header */}
                  <div className={styles.ticketTop}>
                    <div className={styles.brandRow}>
                      <span className={styles.passLabel}>CIRCA OFFICIAL PASS</span>
                      <span className={styles.refBadge}>{reg.bookingRef}</span>
                    </div>

                    <h2 className={styles.eventTitle}>
                      <Link to={`/events/${reg.eventId}`}>{reg.eventTitle}</Link>
                    </h2>

                    <div className={styles.specsGrid}>
                      <div className={styles.spec}>
                        <Calendar size={14} className={styles.icon} />
                        <span>{formatDateFull(reg.eventDate)}</span>
                      </div>
                      <div className={styles.spec}>
                        <Clock size={14} className={styles.icon} />
                        <span>{reg.eventTime}</span>
                      </div>
                      <div className={styles.spec}>
                        <MapPin size={14} className={styles.icon} />
                        <span>{reg.eventVenue}</span>
                      </div>
                      <div className={styles.spec}>
                        <Users size={14} className={styles.icon} />
                        <span>
                          {reg.ticketsCount} Ticket{reg.ticketsCount > 1 ? 's' : ''} &bull; {reg.fullName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Perforation Line with Cut Notches */}
                  <div className={styles.perforation}>
                    <div className={`${styles.notch} ${styles.notchLeft}`} />
                    <div className={styles.dashedRule} />
                    <div className={`${styles.notch} ${styles.notchRight}`} />
                  </div>

                  {/* Ticket Footer Actions */}
                  <div className={styles.ticketBottom}>
                    <div className={styles.priceTag}>
                      {reg.totalPrice === 0 ? 'Free Entry' : `Total: ₹${reg.totalPrice}`}
                    </div>

                    <div className={styles.btnGroup}>
                      <button
                        type="button"
                        onClick={() => handleDownload(reg)}
                        className={styles.downloadBtn}
                        title="Download .ics Calendar Invite"
                      >
                        <Download size={15} />
                        <span>Calendar (.ics)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCancelTarget(reg)}
                        className={styles.cancelBtn}
                        title="Cancel this pass and release seats"
                        aria-label={`Cancel pass for ${reg.eventTitle}`}
                      >
                        <Trash2 size={15} />
                        <span>Release</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className={styles.emptyState}>
            <div className={styles.emptyIconWrap}>
              <Ticket size={40} className={styles.emptyIcon} strokeWidth={1.5} />
            </div>
            <h2 className={styles.emptyTitle}>Your Passbook is Clear</h2>
            <p className={styles.emptyDesc}>
              You have not reserved any gatherings in this browser session. Browse our seasonal catalogue of letterpress salons, ambient synthesis, and culinary workshops to claim your first pass.
            </p>
            <Link to="/events" className={styles.emptyCta}>
              <span>Explore Seasonal Programme</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </main>

      {/* Cancellation Confirmation Modal */}
      <Modal
        isOpen={!!cancelTarget}
        onClose={() => setCancelTarget(null)}
        title="Release Registration Pass?"
        subtitle="This action will return your allocated seats to the public ledger."
      >
        {cancelTarget && (
          <div className={styles.confirmModalContent}>
            <div className={styles.warningBox}>
              <AlertTriangle size={20} className={styles.warnIcon} />
              <p>
                Are you sure you wish to cancel your pass for <strong>{cancelTarget.eventTitle}</strong> ({cancelTarget.bookingRef})?
              </p>
            </div>

            <div className={styles.modalActionButtons}>
              <button
                type="button"
                onClick={() => setCancelTarget(null)}
                className={styles.keepBtn}
              >
                Keep Pass
              </button>
              <button
                type="button"
                onClick={handleConfirmCancel}
                className={styles.confirmCancelBtn}
              >
                Yes, Release Seat
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
