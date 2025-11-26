"use client";

import { useEffect, useRef, useState } from "react";

interface UseLazyLoadSectionOptions {
  /**
   * Root margin for intersection observer (e.g., "200px" to trigger 200px before entering viewport)
   * @default "300px"
   */
  rootMargin?: string;
  /**
   * Threshold for intersection observer (0-1)
   * @default 0.1
   */
  threshold?: number;
  /**
   * Callback when section becomes visible
   */
  onVisible?: () => void;
}

/**
 * Hook to detect when a section is approaching or visible in the viewport
 * Useful for lazy-loading images and preloading content
 */
export function useLazyLoadSection(options: UseLazyLoadSectionOptions = {}) {
  const {
    rootMargin = "300px",
    threshold = 0.1,
    onVisible,
  } = options;

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!hasLoadedRef.current && onVisible) {
              onVisible();
              hasLoadedRef.current = true;
            }
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, onVisible]);

  return { sectionRef, isVisible };
}

