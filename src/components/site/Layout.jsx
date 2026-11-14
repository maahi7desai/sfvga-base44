import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBioBar from "./FloatingBioBar";
import BackButton from "./BackButton";
import PullToRefresh from "./PullToRefresh";
import ImageGallery from "@/components/home/ImageGallery";
import { isTabRoot } from "@/lib/tabs";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const isHome = location.pathname === "/";
  // Tab roots fade, anything deeper slides like an iOS push.
  const isChild = !isTabRoot(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-background pt-safe">
      <Navbar />
      <main className="flex-1 pt-20 pb-20 md:pb-0">
        <BackButton />
        <PullToRefresh>
          <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={isChild ? { x: 32, opacity: 0 } : { opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={isChild ? { x: -24, opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}>
              
              {outlet}
            </motion.div>
          </AnimatePresence>
          </MotionConfig>
        </PullToRefresh>
      </main>
      {isHome && <ImageGallery />}
      <Footer />
      <FloatingBioBar />
    </div>);

}