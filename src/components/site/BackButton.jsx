import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { isTabRoot, tabRootFor } from "@/lib/tabs";

/**
 * iOS-style back control. Tab roots already show the logo and page title in the
 * persistent header, so this only renders one level deeper (detail screens).
 */
export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPath = useRef(null);
  const currentPath = useRef(location.pathname);

  useEffect(() => {
    if (currentPath.current === location.pathname) return;
    previousPath.current = currentPath.current;
    currentPath.current = location.pathname;
  }, [location.pathname]);

  if (isTabRoot(location.pathname)) return null;

  const handleBack = () => {
    const root = tabRootFor(location.pathname);
    const previous = previousPath.current;

    // Deep link or a hop from another tab: go to this tab's root, not out of the app.
    if (!root || !previous || tabRootFor(previous) !== root) {
      navigate(root || "/");
      return;
    }

    navigate(-1);
  };

  return (
    <div className="mx-auto max-w-[700px] px-5 sm:px-8 pt-2">
      <button
        type="button"
        aria-label="Go back"
        onClick={handleBack}
        className="inline-flex items-center gap-1 -ml-2 pr-3 font-body text-sm font-medium text-accent">
        
        <ChevronLeft className="h-5 w-5" />
        Back
      </button>
    </div>);

}