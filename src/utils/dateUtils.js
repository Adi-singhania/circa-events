/**
 * Date and time formatting helpers for CIRCA Broadside Layouts
 */

export const formatDateFull = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const formatDateShort = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  return `${weekday}, ${day} ${month}`;
};

export const formatDateStamp = (dateStr) => {
  if (!dateStr) return { day: '--', month: '---', weekday: '---', year: '----' };
  const date = new Date(dateStr + 'T00:00:00');
  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
    year: String(date.getFullYear())
  };
};

export const formatTimeRange = (startTime, endTime) => {
  const formatSingleTime = (timeStr) => {
    if (!timeStr) return '';
    const [hours, minutes] = timeStr.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const h12 = hours % 12 || 12;
    return `${h12}:${String(minutes).padStart(2, '0')} ${period}`;
  };

  if (!startTime) return '';
  if (!endTime) return formatSingleTime(startTime);
  return `${formatSingleTime(startTime)} – ${formatSingleTime(endTime)}`;
};

export const getDaysUntil = (dateStr) => {
  if (!dateStr) return null;
  const target = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'Concluded';
  if (diffDays === 0) return 'Starts today';
  if (diffDays === 1) return 'Tomorrow';
  return `Starts in ${diffDays} days`;
};

export const isStartingSoon = (dateStr, daysThreshold = 7) => {
  if (!dateStr) return false;
  const target = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= daysThreshold;
};
