import { useCallback } from 'react';

export const useScrollToSection = () => {
  return useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);
}; 