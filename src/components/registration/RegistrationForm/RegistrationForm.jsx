import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { useRegistrations } from '../../../context/RegistrationContext';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateTickets,
  checkDuplicateRegistration
} from '../../../utils/validators';
import { TicketConfirmation } from '../TicketConfirmation/TicketConfirmation';
import styles from './RegistrationForm.module.css';

export const RegistrationForm = ({
  initialEventId,
  onSuccessCallback,
  onCloseModal
}) => {
  const { events, registrations, registerForEvent, getEventById } = useRegistrations();

  const [selectedEventId, setSelectedEventId] = useState(initialEventId || (events[0]?.id || ''));
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketsCount, setTicketsCount] = useState(1);
  const [notes, setNotes] = useState('');

  // Touched state for onBlur validation
  const [touched, setTouched] = useState({});
  // Inline errors
  const [errors, setErrors] = useState({});
  // Form shake effect
  const [isShaking, setIsShaking] = useState(false);
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Confirmed registration object
  const [completedRegistration, setCompletedRegistration] = useState(null);

  // Field element refs for focusing first invalid field
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const eventRef = useRef(null);
  const ticketsRef = useRef(null);

  const selectedEvent = getEventById(selectedEventId);

  useEffect(() => {
    if (initialEventId) {
      setSelectedEventId(initialEventId);
    }
  }, [initialEventId]);

  // Real-time field validator
  const validateField = (field, value) => {
    switch (field) {
      case 'fullName':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'ticketsCount':
        return validateTickets(value, selectedEvent?.seatsLeft);
      case 'selectedEventId':
        if (!value) return 'Please select a gathering to attend.';
        return null;
      default:
        return null;
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let val;
    if (field === 'fullName') val = fullName;
    else if (field === 'email') val = email;
    else if (field === 'phone') val = phone;
    else if (field === 'ticketsCount') val = ticketsCount;
    else if (field === 'selectedEventId') val = selectedEventId;

    const error = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Run full validation
    const nameErr = validateName(fullName);
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phone);
    const ticketsErr = validateTickets(ticketsCount, selectedEvent?.seatsLeft);
    const eventErr = !selectedEventId ? 'Please select an event.' : null;

    let duplicateErr = null;
    if (!emailErr && selectedEventId) {
      const isDuplicate = checkDuplicateRegistration(registrations, email, selectedEventId);
      if (isDuplicate) {
        duplicateErr = 'You have already registered for this event with this email address.';
      }
    }

    const newErrors = {
      fullName: nameErr,
      email: emailErr || duplicateErr,
      phone: phoneErr,
      ticketsCount: ticketsErr,
      selectedEventId: eventErr
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      ticketsCount: true,
      selectedEventId: true
    });

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) {
      // Trigger shake animation
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      // Focus first invalid element
      if (nameErr && nameRef.current) {
        nameRef.current.focus();
      } else if ((emailErr || duplicateErr) && emailRef.current) {
        emailRef.current.focus();
      } else if (phoneErr && phoneRef.current) {
        phoneRef.current.focus();
      } else if (eventErr && eventRef.current) {
        eventRef.current.focus();
      } else if (ticketsErr && ticketsRef.current) {
        ticketsRef.current.focus();
      }
      return;
    }

    // Simulate 1s loading state as specified
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = registerForEvent({
      eventId: selectedEventId,
      fullName,
      email,
      phone,
      ticketsCount: Number(ticketsCount),
      notes
    });

    setIsSubmitting(false);

    if (result.success) {
      setCompletedRegistration(result.registration);
      if (onSuccessCallback) {
        onSuccessCallback(result.registration);
      }
    } else {
      if (result.error && result.error.includes('duplicate')) {
        setErrors((prev) => ({
          ...prev,
          email: 'You have already reserved a pass for this event with this email.'
        }));
      }
    }
  };

  // If completed, show confirmation view
  if (completedRegistration) {
    return (
      <TicketConfirmation
        registration={completedRegistration}
        event={selectedEvent}
        onClose={onCloseModal}
      />
    );
  }

  const isSoldOut = selectedEvent && selectedEvent.seatsLeft <= 0;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${isShaking ? styles.shake : ''}`}
      noValidate
      aria-label="Event reservation form"
    >
      {/* Event Selection */}
      <div className={styles.fieldGroup}>
        <label htmlFor="reg-event" className={styles.label}>
          <span>Selected Gathering</span>
          <span className={styles.required}>*</span>
        </label>
        <select
          id="reg-event"
          ref={eventRef}
          value={selectedEventId}
          onChange={(e) => {
            setSelectedEventId(e.target.value);
            if (touched.selectedEventId) {
              setErrors((prev) => ({ ...prev, selectedEventId: null }));
            }
          }}
          onBlur={() => handleBlur('selectedEventId')}
          className={`${styles.select} ${errors.selectedEventId ? styles.fieldError : ''}`}
          aria-invalid={!!errors.selectedEventId}
          aria-describedby={errors.selectedEventId ? 'event-error' : undefined}
          disabled={isSubmitting}
        >
          {events.map((ev) => (
            <option key={ev.id} value={ev.id} disabled={ev.seatsLeft <= 0}>
              {ev.title} &bull; {ev.venue.city} ({ev.seatsLeft > 0 ? `${ev.seatsLeft} seats left` : 'SOLD OUT'})
            </option>
          ))}
        </select>
        {errors.selectedEventId && (
          <p id="event-error" className={styles.errorText} role="alert">
            <AlertCircle size={13} />
            <span>{errors.selectedEventId}</span>
          </p>
        )}
      </div>

      {/* Selected Event Quick Snapshot */}
      {selectedEvent && (
        <div className={styles.eventSnapshot}>
          <div className={styles.snapshotTop}>
            <span className={styles.snapshotDate}>
              {selectedEvent.date} &bull; {selectedEvent.startTime}
            </span>
            <span className={styles.snapshotPrice}>
              {selectedEvent.isFree ? 'Free Admission' : `₹${selectedEvent.price} / person`}
            </span>
          </div>
          <div className={styles.snapshotSeats}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>
              {selectedEvent.seatsLeft > 0
                ? `${selectedEvent.seatsLeft} out of ${selectedEvent.totalSeats} seats remaining in registry`
                : 'This gathering is currently sold out.'}
            </span>
          </div>
        </div>
      )}

      {/* Full Name Field */}
      <div className={styles.fieldGroup}>
        <label htmlFor="reg-name" className={styles.label}>
          <span>Full Name</span>
          <span className={styles.required}>*</span>
        </label>
        <input
          id="reg-name"
          ref={nameRef}
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (touched.fullName) {
              setErrors((prev) => ({ ...prev, fullName: validateName(e.target.value) }));
            }
          }}
          onBlur={() => handleBlur('fullName')}
          placeholder="e.g. Rohini Sen"
          className={`${styles.input} ${errors.fullName ? styles.fieldError : ''}`}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'name-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <p id="name-error" className={styles.errorText} role="alert">
            <AlertCircle size={13} />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Two Column Row: Email & Indian Phone */}
      <div className={styles.twoColRow}>
        {/* Email Field */}
        <div className={styles.fieldGroup}>
          <label htmlFor="reg-email" className={styles.label}>
            <span>Email Address</span>
            <span className={styles.required}>*</span>
          </label>
          <input
            id="reg-email"
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (touched.email) {
                setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
              }
            }}
            onBlur={() => handleBlur('email')}
            placeholder="name@domain.com"
            className={`${styles.input} ${errors.email ? styles.fieldError : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p id="email-error" className={styles.errorText} role="alert">
              <AlertCircle size={13} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Indian Phone Field */}
        <div className={styles.fieldGroup}>
          <label htmlFor="reg-phone" className={styles.label}>
            <span>Mobile (India)</span>
            <span className={styles.required}>*</span>
          </label>
          <input
            id="reg-phone"
            ref={phoneRef}
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (touched.phone) {
                setErrors((prev) => ({ ...prev, phone: validatePhone(e.target.value) }));
              }
            }}
            onBlur={() => handleBlur('phone')}
            placeholder="+91 98765 43210"
            className={`${styles.input} ${errors.phone ? styles.fieldError : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p id="phone-error" className={styles.errorText} role="alert">
              <AlertCircle size={13} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Ticket Count & Total Calculation */}
      <div className={styles.twoColRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="reg-tickets" className={styles.label}>
            <span>Number of Passes (1–5)</span>
            <span className={styles.required}>*</span>
          </label>
          <select
            id="reg-tickets"
            ref={ticketsRef}
            value={ticketsCount}
            onChange={(e) => {
              const val = Number(e.target.value);
              setTicketsCount(val);
              if (touched.ticketsCount) {
                setErrors((prev) => ({
                  ...prev,
                  ticketsCount: validateTickets(val, selectedEvent?.seatsLeft)
                }));
              }
            }}
            onBlur={() => handleBlur('ticketsCount')}
            className={`${styles.select} ${errors.ticketsCount ? styles.fieldError : ''}`}
            aria-invalid={!!errors.ticketsCount}
            aria-describedby={errors.ticketsCount ? 'tickets-error' : undefined}
            disabled={isSubmitting || isSoldOut}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option
                key={n}
                value={n}
                disabled={selectedEvent && n > selectedEvent.seatsLeft}
              >
                {n} {n === 1 ? 'ticket' : 'tickets'}
              </option>
            ))}
          </select>
          {errors.ticketsCount && (
            <p id="tickets-error" className={styles.errorText} role="alert">
              <AlertCircle size={13} />
              <span>{errors.ticketsCount}</span>
            </p>
          )}
        </div>

        {/* Total Cost preview */}
        <div className={styles.totalBox}>
          <span className={styles.totalLabel}>TOTAL TO SETTLE</span>
          <span className={styles.totalAmount}>
            {selectedEvent?.isFree
              ? 'Free Pass'
              : `₹${(selectedEvent?.price || 0) * ticketsCount}`}
          </span>
          <span className={styles.settleNote}>Door presentation / direct pass</span>
        </div>
      </div>

      {/* Optional Note Field */}
      <div className={styles.fieldGroup}>
        <label htmlFor="reg-notes" className={styles.label}>
          <span>Special Dietary / Accessibility Notes (Optional)</span>
        </label>
        <textarea
          id="reg-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Wheelchair assistance required, gluten sensitivity, or preferred language..."
          rows={3}
          className={styles.textarea}
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        disabled={isSubmitting || isSoldOut}
        className={styles.submitBtn}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className={styles.spinner} />
            <span>Recording Allocation...</span>
          </>
        ) : isSoldOut ? (
          <span>Gathering Sold Out</span>
        ) : (
          <>
            <span>Confirm &amp; Issue Pass</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};
