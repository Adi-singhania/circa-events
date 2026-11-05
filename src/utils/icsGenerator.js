/**
 * RFC 5545 iCalendar (.ics) generator for CIRCA passes
 */

export const generateIcsFile = (event, registration) => {
  if (!event) return;

  const formatDateForIcs = (dateStr, timeStr) => {
    const cleanDate = dateStr.replace(/-/g, '');
    const cleanTime = (timeStr || '09:00').replace(/:/g, '') + '00';
    return `${cleanDate}T${cleanTime}`;
  };

  const startStamp = formatDateForIcs(event.date, event.startTime);
  const endStamp = formatDateForIcs(event.date, event.endTime || '18:00');
  const nowStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const uid = `${registration?.bookingRef || 'CIRCA'}-${Date.now()}@circa.events`;

  const venueString = `${event.venue.name}, ${event.venue.address}, ${event.venue.city}`;
  const summary = `CIRCA: ${event.title}`;
  const description = `${event.tagline}\\n\\nAttendee: ${registration?.fullName || 'Guest'}\\nBooking ID: ${registration?.bookingRef || 'N/A'}\\nSeats: ${registration?.ticketsCount || 1}\\nVenue: ${venueString}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CIRCA Events//Editorial Broadside//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART:${startStamp}`,
    `DTEND:${endStamp}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${venueString}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.id}-circa-pass.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};
