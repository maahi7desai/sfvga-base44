import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBioBar from "./FloatingBioBar";
import ImageGallery from "@/components/home/ImageGallery";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {isHome && <ImageGallery />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingBioBar />
    </div>
  );
}