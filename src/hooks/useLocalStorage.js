import { useState, useEffect, useCallback } from 'react';

/**
 * Safe local storage hook with try/catch and cross-tab/event sync
 */
export function useLocalStorage(key, initialValue) {
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue = useCallback(
    (value) => {
      if (typeof window === 'undefined') {
        console.warn(`Tried setting localStorage key "${key}" even though window is not defined`);
        return;
      }

      try {
        const newValue = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
        window.dispatchEvent(new Event('local-storage-sync'));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  useEffect(() => {
    setStoredValue(readValue());

    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage-sync', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage-sync', handleStorageChange);
    };
  }, [key, readValue]);

  return [storedValue, setValue];
}
