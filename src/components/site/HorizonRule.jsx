import React from "react";

export default function HorizonRule({ className = "" }) {
  return (
    <div className={`horizon-rule h-px w-full ${className}`} aria-hidden="true" />
  );
}