import React from "react";

export default function Logo({ className = "", variant = "light" }) {
  const main = variant === "light" ? "#FFFDF5" : "#006D77";
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M3 29 L37 29" stroke={main} strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M20 29 C20 19 12 15 7 12 C7 21 13 25 20 29 Z"
        fill={main}
      />
      <path
        d="M20 29 C20 19 28 15 33 12 C33 21 27 25 20 29 Z"
        fill={main}
        fillOpacity="0.55"
      />
      <circle cx="20" cy="31.5" r="1.7" fill="#84CC16" />
    </svg>
  );
}