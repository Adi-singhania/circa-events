import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Sparkles } from 'lucide-react';
import { formatDateStamp, formatTimeRange, getDaysUntil, isStartingSoon } from '../../../utils/dateUtils';
import { Badge } from '../../common/Badge/Badge';
import styles from './EventCard.module.css';

export const EventCard = ({ event, onQuickRegister }) => {
  const [imgError, setImgError] = useState(false);
  const dateStamp = formatDateStamp(event.date);
  const startingSoon = isStartingSoon(event.date, 7);
  const daysUntilText = getDaysUntil(event.date);

  const fallbackPattern = (
    <div className={styles.fallbackPattern}>
      <span className={styles.fallbackTitle}>{event.category}</span>
    </div>
  );

  return (
    <article className={styles.card}>
      {/* Visual / Image Block */}
      <div className={styles.mediaWrap}>
        <Link to={`/events/${event.id}`} className={styles.imageLink} tabIndex="-1" aria-hidden="true">
          {imgError ? (
            fallbackPattern
          ) : (
            <img
              src={event.image}
              alt={event.title}
              className={styles.image}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <div className={styles.imageOverlay} />
        </Link>

        {/* Floating Date Stamp */}
        <div className={styles.dateStamp} aria-label={`Date: ${dateStamp.weekday}, ${dateStamp.day} ${dateStamp.month}`}>
          <span className={styles.stampDay}>{dateStamp.day}</span>
          <span className={styles.stampMonth}>{dateStamp.month}</span>
        </div>

        {/* Urgent countdown pill if within 7 days */}
        {startingSoon && (
          <div className={styles.urgentPill}>
            <Sparkles size={12} strokeWidth={2.2} />
            <span>{daysUntilText}</span>
          </div>
        )}
      </div>

      {/* Editorial Content Block */}
      <div className={styles.content}>
        <div className={styles.metaTop}>
          <Badge variant="default" size="sm">
            {event.category}
          </Badge>
          <div className={styles.timeTag}>
            <Clock size={13} className={styles.metaIcon} />
            <span>{event.startTime}</span>
          </div>
        </div>

        <h3 className={styles.title}>
          <Link to={`/events/${event.id}`} className={styles.titleLink}>
            {event.title}
          </Link>
        </h3>

        <p className={styles.tagline}>{event.tagline}</p>

        <div className={styles.venueRow}>
          <MapPin size={14} className={styles.venueIcon} />
          <span className={styles.venueText}>
            {event.venue.name}, {event.venue.city}
          </span>
        </div>

        {/* Footer with Price, Seats & Register Action */}
        <div className={styles.cardFooter}>
          <div className={styles.priceSeatBlock}>
            <div className={styles.priceTag}>
              {event.isFree ? (
                <span className={styles.freeLabel}>Free Entry</span>
              ) : (
                <>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{event.price}</span>
                </>
              )}
            </div>
            <div className={`${styles.seatCounter} ${event.seatsLeft <= 10 ? styles.seatUrgent : ''}`}>
              <Users size={12} />
              <span>{event.seatsLeft} left</span>
            </div>
          </div>

          <div className={styles.actionsBlock}>
            {onQuickRegister ? (
              <button
                type="button"
                className={styles.registerLink}
                onClick={() => onQuickRegister(event)}
                aria-label={`Register for ${event.title}`}
              >
                <span>Register</span>
                <ArrowRight size={15} className={styles.arrow} />
              </button>
            ) : (
              <Link
                to={`/register/${event.id}`}
                className={styles.registerLink}
                aria-label={`Register for ${event.title}`}
              >
                <span>Register</span>
                <ArrowRight size={15} className={styles.arrow} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
