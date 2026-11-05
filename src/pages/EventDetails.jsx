import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  Users,
  Sparkles,
  ArrowLeft,
  CalendarClock
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { formatDateStamp, formatTimeRange, getDaysUntil } from '../utils/dateUtils';
import { useCountdown } from '../hooks/useCountdown';
import { Badge } from '../components/common/Badge/Badge';
import { Accordion } from '../components/details/Accordion/Accordion';
import { ScheduleList } from '../components/details/ScheduleList/ScheduleList';
import { SpeakerGrid } from '../components/details/SpeakerGrid/SpeakerGrid';
import { StickyBookingCard } from '../components/details/StickyBookingCard/StickyBookingCard';
import { EventCard } from '../components/events/EventCard/EventCard';
import { Modal } from '../components/common/Modal/Modal';
import { RegistrationForm } from '../components/registration/RegistrationForm/RegistrationForm';
import styles from './EventDetails.module.css';

export const EventDetails = () => {
  const { id } = useParams();
  const { events, getEventById } = useRegistrations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const event = getEventById(id);

  if (!event) {
    return <Navigate to="/404" replace />;
  }

  const dateStamp = formatDateStamp(event.date);
  const countdown = useCountdown(event.date, event.startTime);
  const daysUntil = getDaysUntil(event.date);

  // Similar Events (matching category or tags, excluding current)
  const similarEvents = events
    .filter((e) => e.id !== event.id && (e.category === event.category || e.tags?.some((t) => event.tags?.includes(t))))
    .slice(0, 3);

  return (
    <div className={styles.pageWrap}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link to="/" className={styles.crumbLink}>Home</Link>
            <span className={styles.crumbSep}>/</span>
            <Link to="/events" className={styles.crumbLink}>Programme</Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.currentCrumb}>{event.title}</span>
          </nav>
        </div>
      </div>

      <header className={styles.heroHeader}>
        <div className="container">
          <div className={styles.topMeta}>
            <Badge variant="vermilion" size="md">
              {event.category}
            </Badge>
            <span className={styles.statusPill}>
              <Sparkles size={13} />
              <span>{daysUntil}</span>
            </span>
          </div>

          <h1 className={styles.eventTitle}>{event.title}</h1>
          <p className={styles.tagline}>{event.tagline}</p>

          {/* Countdown Strip */}
          {!countdown.isPast && (
            <div className={styles.countdownStrip}>
              <div className={styles.countdownTitle}>
                <CalendarClock size={16} />
                <span>GATHERING COMMENCES IN</span>
              </div>
              <div className={styles.countdownUnits}>
                <div className={styles.unitBox}>
                  <span className={styles.unitVal}>{String(countdown.days).padStart(2, '0')}</span>
                  <span className={styles.unitLabel}>DAYS</span>
                </div>
                <span className={styles.unitColon}>:</span>
                <div className={styles.unitBox}>
                  <span className={styles.unitVal}>{String(countdown.hours).padStart(2, '0')}</span>
                  <span className={styles.unitLabel}>HOURS</span>
                </div>
                <span className={styles.unitColon}>:</span>
                <div className={styles.unitBox}>
                  <span className={styles.unitVal}>{String(countdown.minutes).padStart(2, '0')}</span>
                  <span className={styles.unitLabel}>MINUTES</span>
                </div>
                <span className={styles.unitColon}>:</span>
                <div className={styles.unitBox}>
                  <span className={styles.unitVal}>{String(countdown.seconds).padStart(2, '0')}</span>
                  <span className={styles.unitLabel}>SECONDS</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Full-Width Hero Image */}
      <div className="container">
        <div className={styles.heroImageWrap}>
          <img
            src={event.image}
            alt={event.title}
            className={styles.heroImg}
          />
          <div className={styles.heroImgOverlay} />
          <div className={styles.heroDateBadge}>
            <span className={styles.badgeDay}>{dateStamp.day}</span>
            <span className={styles.badgeMonth}>{dateStamp.month}</span>
          </div>
        </div>
      </div>

      {/* Content & Sticky Sidebar Layout */}
      <main className={`container ${styles.layoutContainer}`} id="main-content">
        <div className={styles.mainCol}>
          {/* Organiser Profile Card */}
          {event.organizer && (
            <div className={styles.organizerCard}>
              <img
                src={event.organizer.avatar}
                alt={event.organizer.name}
                className={styles.organizerAvatar}
              />
              <div className={styles.organizerInfo}>
                <span className={styles.organizerLabel}>CURATED &amp; HOSTED BY</span>
                <h4 className={styles.organizerName}>{event.organizer.name}</h4>
                <p className={styles.organizerRole}>{event.organizer.role}</p>
              </div>
            </div>
          )}

          {/* About Section */}
          <section className={styles.sectionBlock}>
            <h2 className={styles.blockHeading}>About This Gathering</h2>
            <div className={styles.prose}>
              <p>{event.description}</p>
            </div>

            {/* Tags Pill Row */}
            {event.tags && event.tags.length > 0 && (
              <div className={styles.tagsRow}>
                {event.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Schedule / Agenda Timeline */}
          {event.schedule && event.schedule.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.blockHeading}>Programme &amp; Schedule</h2>
              <ScheduleList schedule={event.schedule} />
            </section>
          )}

          {/* Speakers / Guest Practitioners */}
          {event.speakers && event.speakers.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.blockHeading}>Featured Practitioners &amp; Guests</h2>
              <SpeakerGrid speakers={event.speakers} />
            </section>
          )}

          {/* Venue & Location Link */}
          <section className={styles.sectionBlock}>
            <h2 className={styles.blockHeading}>Venue &amp; Location</h2>
            <div className={styles.venueCard}>
              <div className={styles.venueDetails}>
                <h4 className={styles.venueName}>{event.venue.name}</h4>
                <p className={styles.venueAddress}>{event.venue.address}, {event.venue.city}</p>
              </div>
              <a
                href={event.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <span>Open in Map</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </section>

          {/* Frequently Inquired Questions */}
          {event.faqs && event.faqs.length > 0 && (
            <section className={styles.sectionBlock}>
              <h2 className={styles.blockHeading}>Inquiries &amp; Information</h2>
              <Accordion items={event.faqs} />
            </section>
          )}
        </div>

        {/* Sticky Sidebar Column */}
        <aside className={styles.sidebarCol}>
          <StickyBookingCard
            event={event}
            onOpenRegistration={() => setIsModalOpen(true)}
          />
        </aside>
      </main>

      {/* Similar Events */}
      {similarEvents.length > 0 && (
        <section className={styles.similarSection}>
          <div className="container">
            <div className={styles.similarHeader}>
              <div className={styles.kicker}>FURTHER DISPATCHES</div>
              <h3 className={styles.similarTitle}>Similar Gatherings of Interest</h3>
            </div>
            <div className={styles.similarGrid}>
              {similarEvents.map((simEvent) => (
                <EventCard key={simEvent.id} event={simEvent} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={event.title}
        subtitle={`${event.venue.name}, ${event.venue.city}`}
      >
        <RegistrationForm
          initialEventId={event.id}
          onCloseModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
