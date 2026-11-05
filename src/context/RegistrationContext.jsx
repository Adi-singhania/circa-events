import React, { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { INITIAL_EVENTS } from '../data/events';
import { useToast } from './ToastContext';

const RegistrationContext = createContext({
  events: [],
  registrations: [],
  registerForEvent: () => {},
  cancelRegistration: () => {},
  getEventById: () => {},
  isEventBookedByEmail: () => false
});

export const RegistrationProvider = ({ children }) => {
  const [registrations, setRegistrations] = useLocalStorage('circa_registrations', []);
  const [seatOverrides, setSeatOverrides] = useLocalStorage('circa_event_seat_overrides', {});
  const { showToast } = useToast();

  // Combine INITIAL_EVENTS with persistent seat overrides
  const events = useMemo(() => {
    return INITIAL_EVENTS.map((event) => {
      const overrideSeats = seatOverrides[event.id];
      const seatsLeft = typeof overrideSeats === 'number' ? overrideSeats : event.seatsLeft;
      return {
        ...event,
        seatsLeft: Math.max(0, seatsLeft)
      };
    });
  }, [seatOverrides]);

  const getEventById = (id) => {
    return events.find((e) => e.id === id) || null;
  };

  const isEventBookedByEmail = (eventId, email) => {
    if (!email) return false;
    const cleanEmail = email.trim().toLowerCase();
    return registrations.some(
      (r) => r.eventId === eventId && r.email.trim().toLowerCase() === cleanEmail
    );
  };

  const registerForEvent = (registrationData) => {
    const { eventId, fullName, email, phone, ticketsCount, notes } = registrationData;
    const event = getEventById(eventId);

    if (!event) {
      showToast('Event could not be found.', 'error');
      return { success: false, error: 'Event not found.' };
    }

    if (ticketsCount > event.seatsLeft) {
      showToast(`Only ${event.seatsLeft} seats remaining for this event.`, 'error');
      return { success: false, error: `Only ${event.seatsLeft} seats left.` };
    }

    if (isEventBookedByEmail(eventId, email)) {
      showToast('You are already registered for this event with this email.', 'error');
      return { success: false, error: 'Duplicate registration found.' };
    }

    // Generate distinctive booking reference (e.g. CIRCA-8F3K9M)
    const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
    const bookingRef = `CIRCA-${randomChars}`;
    const registrationId = `REG-${Date.now()}-${randomChars}`;

    const newRegistration = {
      id: registrationId,
      bookingRef,
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.startTime,
      eventVenue: `${event.venue.name}, ${event.venue.city}`,
      eventImage: event.image,
      category: event.category,
      pricePerTicket: event.price,
      totalPrice: event.price * ticketsCount,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      ticketsCount: Number(ticketsCount),
      notes: notes ? notes.trim() : '',
      registeredAt: new Date().toISOString()
    };

    // Update registrations list
    setRegistrations((prev) => [newRegistration, ...prev]);

    // Deduct seats
    const newSeatsLeft = Math.max(0, event.seatsLeft - Number(ticketsCount));
    setSeatOverrides((prev) => ({
      ...prev,
      [event.id]: newSeatsLeft
    }));

    showToast(`Pass reserved successfully for ${event.title}!`, 'success');
    return { success: true, registration: newRegistration };
  };

  const cancelRegistration = (registrationId) => {
    const target = registrations.find((r) => r.id === registrationId);
    if (!target) {
      showToast('Registration pass not found.', 'error');
      return { success: false };
    }

    // Restore seats
    const event = getEventById(target.eventId);
    if (event) {
      setSeatOverrides((prev) => {
        const currentSeats = typeof prev[event.id] === 'number' ? prev[event.id] : event.seatsLeft;
        return {
          ...prev,
          [event.id]: Math.min(event.totalSeats, currentSeats + target.ticketsCount)
        };
      });
    }

    // Remove registration
    setRegistrations((prev) => prev.filter((r) => r.id !== registrationId));
    showToast(`Pass ${target.bookingRef} has been cancelled and seats released.`, 'info');
    return { success: true };
  };

  return (
    <RegistrationContext.Provider
      value={{
        events,
        registrations,
        registerForEvent,
        cancelRegistration,
        getEventById,
        isEventBookedByEmail
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrations = () => useContext(RegistrationContext);
