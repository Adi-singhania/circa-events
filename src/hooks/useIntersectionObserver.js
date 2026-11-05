import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when element is visible in viewport
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce !== false) {
          observer.unobserve(node);
        }
      } else if (options.triggerOnce === false) {
        setIsIntersecting(false);
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px',
      ...options
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [elementRef, isIntersecting];
}
