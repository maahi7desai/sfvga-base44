import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const THRESHOLD = 70;
const MAX_PULL = 110;

/**
 * Native-feeling pull-to-refresh for the tab scroll areas. Content follows the
 * downward drag, a spinner appears once the threshold is passed, and releasing
 * invalidates the active queries.
 */
export default function PullToRefresh({ children }) {
  const ref = useRef(null);
  const startY = useRef(null);
  const pullRef = useRef(0);
  const refreshingRef = useRef(false);
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setPullValue = (value) => {
      pullRef.current = value;
      setPull(value);
    };

    const onTouchStart = (e) => {
      if (window.scrollY > 0 || refreshingRef.current) return;
      startY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (startY.current === null) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) setPullValue(Math.min(MAX_PULL, delta * 0.5));
    };

    const onTouchEnd = () => {
      if (startY.current === null) return;
      startY.current = null;
      if (pullRef.current >= THRESHOLD) {
        refreshingRef.current = true;
        setRefreshing(true);
        setPullValue(THRESHOLD);
        queryClient.invalidateQueries().finally(() => {
          setTimeout(() => {
            refreshingRef.current = false;
            setRefreshing(false);
            setPullValue(0);
          }, 500);
        });
      } else {
        setPullValue(0);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [queryClient]);

  return (
    <div ref={ref} className="relative">
      <div
        className="fixed inset-x-0 z-40 flex justify-center pointer-events-none"
        style={{
          top: "calc(env(safe-area-inset-top) + 4.5rem)",
          opacity: pull > 4 ? 1 : 0,
          transition: "opacity 0.18s ease"
        }}>
        
        <div className="h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center">
          <Loader2
            className="h-5 w-5 text-primary animate-spin"
            style={{ animationPlayState: refreshing ? "running" : "paused" }} />
          
        </div>
      </div>
      <div
        style={{
          transform: `translateY(${pull}px)`,
          transition: pull === 0 ? "transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)" : "none"
        }}>
        
        {children}
      </div>
    </div>);

}