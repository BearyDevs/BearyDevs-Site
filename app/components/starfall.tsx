"use client";

import { memo } from "react";
import "@/app/styles/starfall.css";

// eslint-disable-next-line react/display-name
const FallingStar = memo(() => <div className="falling-star"></div>);

interface StarFallProps {
  starCount?: number;
}

export default function StarFall({ starCount = 40 }: StarFallProps) {
  // Using a stable array to avoid unnecessary re-renders
  const stars = Array.from({ length: starCount }, (_, index) => (
    <FallingStar key={index} />
  ));
  
  return <div className="starfall">{stars}</div>;
}
