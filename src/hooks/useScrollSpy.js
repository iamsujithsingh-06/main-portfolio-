import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section in navigation based on viewport scroll position.
 * @param {string[]} sectionIds - Array of section element IDs to watch.
 * @param {object} options - Configuration options for the IntersectionObserver.
 */
export const useScrollSpy = (sectionIds, options = { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 }) => {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    // Fallback: simple scroll event listener to capture edge cases (e.g. top of page, bottom of page)
    const handleScroll = () => {
      // If we are at the very top of the page, highlight the first section (home)
      if (window.scrollY < 100) {
        setActiveId('home');
        return;
      }
      
      // If we are at the bottom of the page, highlight the last section (contact)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options]);

  return activeId;
};
export default useScrollSpy;
