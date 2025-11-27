"use client";

import React, { useState, useCallback } from "react";
import EventBtns from "@/components/Gallery/EventBtns";
import EventSlug from "@/components/Gallery/EventSlug";

const GalleryContent = () => {
  const [selectedFilter, setSelectedFilter] = useState("View All");

  const handleFilterChange = useCallback((filter: string) => {
    // Update state immediately - React will batch and update UI instantly
    setSelectedFilter(filter);
  }, []);

  return (
    <>
      <EventBtns selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
      <EventSlug selectedFilter={selectedFilter} />
    </>
  );
};

export default GalleryContent;

