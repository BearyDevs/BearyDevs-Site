"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";

interface PupilPosition {
  x: number;
  y: number;
}

const ALERT_MESSAGES = [
  "Hey! Please stop clicking me!",
  "Don't click me too much!",
  "You are annoying! Please stop!",
];

const INITIAL_POSITION = { x: 50, y: 50 };
const ANIMATION_SPEED = 0.1;

/**
 * Interactive eye that follows cursor movement
 */
const Eye = memo(() => {
  const [pupilPosition, setPupilPosition] = useState<PupilPosition>(INITIAL_POSITION);
  const eyeRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetPositionRef = useRef<PupilPosition>(INITIAL_POSITION);

  // Smooth animation of pupil movement
  useEffect(() => {
    const animate = () => {
      setPupilPosition((prev) => {
        const dx = (targetPositionRef.current.x - prev.x) * ANIMATION_SPEED;
        const dy = (targetPositionRef.current.y - prev.y) * ANIMATION_SPEED;
        return {
          x: prev.x + dx,
          y: prev.y + dy,
        };
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup animation on unmount
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!eyeRef.current) return;

      const eyeRect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
      const distance = Math.min(
        eyeRect.width / 4,
        Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY)
      );

      // Calculate new position as percentage of eye dimensions
      const x = 50 + ((Math.cos(angle) * distance) / (eyeRect.width / 2)) * 100;
      const y = 50 + ((Math.sin(angle) * distance) / (eyeRect.height / 2)) * 100;

      targetPositionRef.current = { x, y };
    };

    // Reset to center when mouse leaves document
    const handleMouseLeave = () => {
      targetPositionRef.current = INITIAL_POSITION;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={eyeRef}
      className="size-3.5 border rounded-full bg-transparent border-[#898989] grid place-items-center"
    >
      <div className="relative w-[50%] h-[50%] rounded-full">
        <div
          className="size-1 absolute bg-white/50 rounded-full"
          style={{
            top: `${pupilPosition.y}%`,
            left: `${pupilPosition.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
});

Eye.displayName = "Eye";

/**
 * Interactive face component with eyes that follow cursor
 */
export const LennyFace = memo(() => {
  const [_clickCount, setClickCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const clickThresholdRef = useRef(Math.floor(Math.random() * 5) + 1);

  const handleClick = useCallback(() => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      
      // Show alert when click threshold is reached
      if (newCount === clickThresholdRef.current) {
        alert(ALERT_MESSAGES[warningCount % ALERT_MESSAGES.length]);
        
        // Reset counters and set new threshold
        setWarningCount((prev) => prev + 1);
        clickThresholdRef.current = Math.floor(Math.random() * 5) + newCount + 5;
        return 0;
      }
      return newCount;
    });
  }, [warningCount]);

  return (
    <div
      className="flex items-center absolute top-[12px] right-5 select-none not-sr-only text-gray-400"
      onClick={handleClick}
      aria-hidden="true"
    >
      <div className="flex items-center space-x-1.5">
        <Eye />
        <span className="mt-1.5">‿</span>
        <Eye />
      </div>
    </div>
  );
});

LennyFace.displayName = "LennyFace";
