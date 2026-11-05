import React from 'react';
import { ArrowRight, Ticket, Users, Calendar, MapPin, ShieldCheck, Check } from 'lucide-react';
import { formatDateStamp } from '../../../utils/dateUtils';
import styles from './StickyBookingCard.module.css';

export const StickyBookingCard = ({ event, onOpenRegistration }) => {
  if (!event) return null;

  const dateStamp = formatDateStamp(event.date);
  const seatsPercentage = Math.round(
    ((event.totalSeats - event.seatsLeft) / event.totalSeats) * 100
  );
  const isSoldOut = event.seatsLeft <= 0;

  return (
    <>
      {/* Desktop Sticky Sidebar Card */}
      <div className={styles.desktopCard}>
        <div className={styles.topPriceRow}>
          <div>
            <span className={styles.label}>PASS CONTRIBUTION</span>
            <div className={styles.priceWrap}>
              {event.isFree ? (
                <span className={styles.freeText}>Free Entry</span>
              ) : (
                <>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.priceNum}>{event.price}</span>
                  <span className={styles.perPerson}>/ pass</span>
                </>
              )}
            </div>
          </div>

          <div className={styles.badgeWrap}>
            <span className={styles.liveBadge}>LEDGER OPEN</span>
          </div>
        </div>

        {/* Capacity Progress Bar */}
        <div className={styles.capacitySection}>
          <div className={styles.capacityHeader}>
            <span className={styles.seatsLeftText}>
              <Users size={14} />
              <strong>{event.seatsLeft}</strong> seats remaining
            </span>
            <span className={styles.percentageText}>{seatsPercentage}% claimed</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{ width: `${Math.min(100, Math.max(10, seatsPercentage))}%` }}
            />
          </div>
        </div>

        {/* Quick Date & Venue Specs */}
        <div className={styles.specList}>
          <div className={styles.specItem}>
            <Calendar size={15} className={styles.specIcon} />
            <span>{dateStamp.weekday}, {dateStamp.day} {dateStamp.month} {dateStamp.year} &bull; {event.startTime}</span>
          </div>
          <div className={styles.specItem}>
            <MapPin size={15} className={styles.specIcon} />
            <span>{event.venue.name}, {event.venue.city}</span>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="button"
          onClick={onOpenRegistration}
          disabled={isSoldOut}
          className={styles.registerBtn}
          aria-label={isSoldOut ? 'Event sold out' : 'Claim your pass now'}
        >
          {isSoldOut ? (
            <span>Capacity Reached (Sold Out)</span>
          ) : (
            <>
              <span>Claim Your Pass</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Guarantee Points */}
        <div className={styles.guarantees}>
          <div className={styles.guaranteeItem}>
            <Check size={14} className={styles.checkIcon} />
            <span>Instant booking ID &amp; .ics calendar export</span>
          </div>
          <div className={styles.guaranteeItem}>
            <Check size={14} className={styles.checkIcon} />
            <span>Stored privately in local browser passbook</span>
          </div>
          <div className={styles.guaranteeItem}>
            <Check size={14} className={styles.checkIcon} />
            <span>Cancel anytime to release seat to community</span>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Drawer */}
      <div className={styles.mobileBar}>
        <div className={styles.mobileInfo}>
          <div className={styles.mobilePrice}>
            {event.isFree ? 'Free' : `₹${event.price}`}
          </div>
          <div className={styles.mobileSeats}>
            {event.seatsLeft > 0 ? `${event.seatsLeft} seats left` : 'Sold Out'}
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenRegistration}
          disabled={isSoldOut}
          className={styles.mobileBtn}
        >
          {isSoldOut ? 'Sold Out' : 'Reserve Pass'}
          {!isSoldOut && <ArrowRight size={16} />}
        </button>
      </div>
    </>
  );
};
