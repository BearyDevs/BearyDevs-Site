"use client";

import "@/app/styles/starfall.css";

const FallingStar = () => <div className="falling-star"></div>;

export default function StarFall({ starCount = 40 }: { starCount?: number }) {
  return (
    <div className="starfall">
      {Array.from({ length: starCount }).map((_, index) => (
        <FallingStar key={index} />
      ))}
    </div>
  );
}
