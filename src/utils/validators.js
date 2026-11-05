/**
 * Form validation utilities for CIRCA event registration
 */

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Full name is required.';
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters.';
  }
  if (trimmed.length > 50) {
    return 'Name must not exceed 50 characters.';
  }
  // Allow letters (including international characters), spaces, dots, hyphens, and apostrophes
  const nameRegex = /^[a-zA-ZÀ-ÿ\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes.';
  }
  return null;
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email address is required.';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. name@domain.com).';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Mobile number is required.';
  }
  // Strip spaces, dashes, and parentheses
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  // Indian mobile validation: starts with 6, 7, 8, or 9, exactly 10 digits; allows optional +91 or 0 prefix
  const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  if (!indianMobileRegex.test(cleanPhone)) {
    return 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210 or +91 98765 43210).';
  }
  return null;
};

export const validateTickets = (count, seatsLeft) => {
  const num = parseInt(count, 10);
  if (isNaN(num) || num < 1) {
    return 'At least 1 ticket must be selected.';
  }
  if (num > 5) {
    return 'Maximum 5 tickets per reservation pass.';
  }
  if (seatsLeft !== undefined && num > seatsLeft) {
    return `Only ${seatsLeft} seat${seatsLeft === 1 ? '' : 's'} remaining for this event.`;
  }
  return null;
};

export const checkDuplicateRegistration = (registrations, email, eventId) => {
  if (!registrations || !Array.isArray(registrations)) return false;
  const cleanEmail = email.trim().toLowerCase();
  return registrations.some(
    (reg) => reg.eventId === eventId && reg.email.trim().toLowerCase() === cleanEmail
  );
};
