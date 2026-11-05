import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Ticket } from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { formatDateStamp } from '../utils/dateUtils';
import { RegistrationForm } from '../components/registration/RegistrationForm/RegistrationForm';
import styles from './RegisterStandalone.module.css';

export const RegisterStandalone = () => {
  const { id } = useParams();
  const { getEventById } = useRegistrations();

  const event = id ? getEventById(id) : null;

  return (
    <div className={styles.pageWrap}>
      <div className={`container ${styles.container}`}>
        {/* Back Link */}
        <div className={styles.backBar}>
          <Link to={event ? `/events/${event.id}` : '/events'} className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>{event ? `Back to ${event.title}` : 'Back to Programme'}</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Gathering Dossier Snapshot */}
          <div className={styles.dossierCol}>
            <div className={styles.dossierCard}>
              <div className={styles.kicker}>PASSPORT APPLICATION &bull; ENTRY REGISTRY</div>
              <h1 className={styles.dossierTitle}>
                {event ? event.title : 'Reserve Your Admission'}
              </h1>

              {event && (
                <>
                  <p className={styles.dossierTagline}>{event.tagline}</p>

                  <div className={styles.imgWrap}>
                    <img src={event.image} alt={event.title} className={styles.img} />
                  </div>

                  <div className={styles.specList}>
                    <div className={styles.specItem}>
                      <Calendar size={16} className={styles.specIcon} />
                      <div>
                        <strong>Date:</strong> {event.date}
                      </div>
                    </div>
                    <div className={styles.specItem}>
                      <Clock size={16} className={styles.specIcon} />
                      <div>
                        <strong>Timing:</strong> {event.startTime} – {event.endTime}
                      </div>
                    </div>
                    <div className={styles.specItem}>
                      <MapPin size={16} className={styles.specIcon} />
                      <div>
                        <strong>Venue:</strong> {event.venue.name}, {event.venue.city}
                      </div>
                    </div>
                    <div className={styles.specItem}>
                      <Ticket size={16} className={styles.specIcon} />
                      <div>
                        <strong>Contribution:</strong>{' '}
                        {event.isFree ? 'Free Admission' : `₹${event.price} per pass`}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Registrant Ledger</h2>
                <p className={styles.formSubtitle}>
                  Please fill in your details to record your pass. Instant confirmation and offline passbook entry will be issued.
                </p>
              </div>

              <RegistrationForm initialEventId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
