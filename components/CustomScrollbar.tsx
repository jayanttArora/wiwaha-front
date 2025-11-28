"use client";

import { useEffect, useState } from "react";

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);

  // Update scrollbar position and size
  useEffect(() => {
    const updateScrollbar = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;

      if (scrollableHeight <= 0) {
        setThumbHeight(0);
        return;
      }

      // Calculate thumb height (minimum 20px, maximum based on viewport ratio)
      const viewportRatio = windowHeight / documentHeight;
      const calculatedHeight = Math.max(20, windowHeight * viewportRatio);
      setThumbHeight(calculatedHeight);

      // Calculate thumb position
      const scrollRatio = scrollTop / scrollableHeight;
      const maxTop = windowHeight - calculatedHeight;
      const thumbTop = scrollRatio * maxTop;
      setScrollProgress(thumbTop);
    };

    // Initial update
    updateScrollbar();

    // Update on scroll
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  // Handle mouse drag
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;

      if (scrollableHeight <= 0) return;

      const deltaY = e.clientY - dragStart;
      const trackHeight = windowHeight - thumbHeight;
      const scrollRatio = deltaY / trackHeight;
      const newScrollTop = dragStartScroll + scrollRatio * scrollableHeight;

      window.scrollTo({
        top: Math.max(0, Math.min(newScrollTop, scrollableHeight)),
        behavior: "auto",
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, dragStartScroll, thumbHeight]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientY);
    setDragStartScroll(window.scrollY || document.documentElement.scrollTop);
  };

  // Don't render if there's no scrollable content
  if (thumbHeight === 0) {
    return null;
  }

  return (
    <div className="custom-scrollbar-container">
      <div className="custom-scrollbar-track">
        <div
          className="custom-scrollbar-thumb"
          style={{
            top: `${scrollProgress}px`,
            height: `${thumbHeight}px`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}

