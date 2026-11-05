import { useState, useEffect } from 'react';

/**
 * Real-time countdown timer hook
 * targetDateStr: '2026-11-10' or '2026-11-10T10:00:00'
 */
export function useCountdown(targetDateStr, targetTimeStr = '00:00') {
  const calculateTimeLeft = () => {
    if (!targetDateStr) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true, totalSeconds: 0 };
    }

    const target = new Date(`${targetDateStr}T${targetTimeStr || '00:00'}:00`).getTime();
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true, totalSeconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPast: false, totalSeconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr, targetTimeStr]);

  return timeLeft;
}
