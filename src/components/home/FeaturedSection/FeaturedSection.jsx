import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Sparkles } from 'lucide-react';
import { formatDateStamp, formatTimeRange } from '../../../utils/dateUtils';
import { Badge } from '../../common/Badge/Badge';
import styles from './FeaturedSection.module.css';

export const FeaturedSection = ({ featuredEvents, onQuickRegister }) => {
  if (!featuredEvents || featuredEvents.length === 0) return null;

  const primaryEvent = featuredEvents[0];
  const secondaryEvents = featuredEvents.slice(1, 3);
  const primaryDate = formatDateStamp(primaryEvent.date);

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={`container ${styles.container}`}>
        {/* Section Heading with Editorial Kicker */}
        <div className={styles.headerRow}>
          <div>
            <div className={styles.kicker}>CURATOR’S SELECTION &bull; AUTUMN 2026</div>
            <h2 id="featured-heading" className={styles.title}>
              Spotlight Gatherings
            </h2>
          </div>
          <p className={styles.headerSubtitle}>
            Three premier gatherings selected for exceptional artisanal integrity and rare communal access.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className={styles.asymmetricGrid}>
          {/* Primary Featured Card (Dominant Column) */}
          {primaryEvent && (
            <article className={styles.primaryCard}>
              <div className={styles.primaryMedia}>
                <Link to={`/events/${primaryEvent.id}`} tabIndex="-1" aria-hidden="true">
                  <img
                    src={primaryEvent.image}
                    alt={primaryEvent.title}
                    className={styles.primaryImg}
                  />
                  <div className={styles.primaryOverlay} />
                </Link>

                <div className={styles.largeDateStamp}>
                  <span className={styles.oversizedNum}>{primaryDate.day}</span>
                  <div className={styles.dateMetaBlock}>
                    <span className={styles.stampMonth}>{primaryDate.month}</span>
                    <span className={styles.stampYear}>{primaryDate.year}</span>
                  </div>
                </div>

                <div className={styles.featuredBadge}>
                  <Sparkles size={13} />
                  <span>PRIMARY FEATURE</span>
                </div>
              </div>

              <div className={styles.primaryContent}>
                <div className={styles.primaryTags}>
                  <Badge variant="vermilion" size="sm">
                    {primaryEvent.category}
                  </Badge>
                  <span className={styles.primaryTime}>
                    <Clock size={13} />
                    <span>{primaryEvent.startTime} – {primaryEvent.endTime}</span>
                  </span>
                </div>

                <h3 className={styles.primaryTitle}>
                  <Link to={`/events/${primaryEvent.id}`}>
                    {primaryEvent.title}
                  </Link>
                </h3>

                <p className={styles.primaryDescription}>
                  {primaryEvent.description}
                </p>

                <div className={styles.primaryVenue}>
                  <MapPin size={15} className={styles.pinIcon} />
                  <span>{primaryEvent.venue.name}, {primaryEvent.venue.city}</span>
                </div>

                {/* Capacity & Register Bar */}
                <div className={styles.primaryFooter}>
                  <div className={styles.pricingSeats}>
                    <div className={styles.priceRow}>
                      <span className={styles.priceVal}>
                        {primaryEvent.isFree ? 'Free Admission' : `₹${primaryEvent.price}`}
                      </span>
                    </div>
                    <div className={styles.seatsBarWrap}>
                      <div className={styles.seatsText}>
                        <Users size={12} />
                        <span>Only {primaryEvent.seatsLeft} passes left</span>
                      </div>
                      <div className={styles.meterTrack}>
                        <div
                          className={styles.meterFill}
                          style={{
                            width: `${Math.max(10, ((primaryEvent.totalSeats - primaryEvent.seatsLeft) / primaryEvent.totalSeats) * 100)}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.primaryActions}>
                    {onQuickRegister ? (
                      <button
                        type="button"
                        className={styles.primaryActionBtn}
                        onClick={() => onQuickRegister(primaryEvent)}
                      >
                        <span>Reserve Pass</span>
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <Link
                        to={`/register/${primaryEvent.id}`}
                        className={styles.primaryActionBtn}
                      >
                        <span>Reserve Pass</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Stacked Column (2 horizontal cards) */}
          <div className={styles.secondaryCol}>
            {secondaryEvents.map((secEvent, index) => {
              const secDate = formatDateStamp(secEvent.date);

              return (
                <article key={secEvent.id} className={styles.secondaryCard}>
                  <div className={styles.secondaryMedia}>
                    <Link to={`/events/${secEvent.id}`} tabIndex="-1" aria-hidden="true">
                      <img
                        src={secEvent.image}
                        alt={secEvent.title}
                        className={styles.secondaryImg}
                      />
                    </Link>
                    <div className={styles.secDateStamp}>
                      <span className={styles.secDay}>{secDate.day}</span>
                      <span className={styles.secMonth}>{secDate.month}</span>
                    </div>
                  </div>

                  <div className={styles.secondaryContent}>
                    <div className={styles.secMetaTop}>
                      <Badge variant="default" size="sm">
                        {secEvent.category}
                      </Badge>
                      <span className={styles.secSeats}>
                        {secEvent.seatsLeft} seats remaining
                      </span>
                    </div>

                    <h4 className={styles.secondaryTitle}>
                      <Link to={`/events/${secEvent.id}`}>
                        {secEvent.title}
                      </Link>
                    </h4>

                    <p className={styles.secondaryTagline}>
                      {secEvent.tagline}
                    </p>

                    <div className={styles.secVenue}>
                      <MapPin size={13} />
                      <span>{secEvent.venue.name}, {secEvent.venue.city}</span>
                    </div>

                    <div className={styles.secFooter}>
                      <span className={styles.secPrice}>
                        {secEvent.isFree ? 'Free' : `₹${secEvent.price}`}
                      </span>

                      {onQuickRegister ? (
                        <button
                          type="button"
                          className={styles.secRegisterLink}
                          onClick={() => onQuickRegister(secEvent)}
                        >
                          <span>Register</span>
                          <ArrowRight size={14} />
                        </button>
                      ) : (
                        <Link
                          to={`/register/${secEvent.id}`}
                          className={styles.secRegisterLink}
                        >
                          <span>Register</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
