import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a9ca2f5e4aceea1e9c56b3b/25d9c62c4_logo_sfvga_final.png";

export default function Logo({ className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="SFVGA — San Fernando Valley Gujarati Association"
      className={className}
      loading="eager"
    />
  );
}