"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      // Tab should activate when the section heading is at/near the top of the viewport
      // Use a small offset just below the sticky nav (~130px for header + nav)
      const triggerPoint = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of this section is at or above the trigger point, it's active
          if (rect.top <= triggerPoint) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Default to first section if we're at the very top
      setActiveSection(sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
