import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { isTabRoot } from "@/lib/tabs";

/**
 * iOS-style back control. Tab roots already show the logo and page title in the
 * persistent header, so this only renders one level deeper (detail screens).
 */
export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  if (isTabRoot(location.pathname)) return null;

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-[700px] px-5 sm:px-8 pt-2">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
          className="inline-flex items-center gap-1 -ml-2 pr-3 font-body text-sm font-medium text-accent">
          
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>
      </div>
    </div>);

}