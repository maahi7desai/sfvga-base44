import React from "react";

const LOGO_URL = "/logo-transparent.png";

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