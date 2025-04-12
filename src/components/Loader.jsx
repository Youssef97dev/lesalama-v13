"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BookingButton from "./BookingButton";
import MobileAccordion from "./MobileAccordion";
import DesktopAccordion from "./DesktopAccordion";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Culinary from "./Culinary";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center">
          <Navbar />
          <Hero />
          <About />
          <MobileAccordion />
          <DesktopAccordion />
          <Events />
          <Culinary />
          <Gallery />
          <Contact />
          <div className="fixed bottom-0 left-0 w-full block lg:hidden z-10">
            <BookingButton />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Initial white background animation */}
          <div className="absolute inset-0 flex z-50">
            <div className="bg-color_1  flex-1 animate-slide-left"></div>
            <div className="bg-color_1  flex-1 animate-slide-right"></div>
          </div>

          {/* Beige background with logo animation */}
          <div className="absolute inset-0 bg-color_2 flex items-center justify-center">
            <img
              src="/logo-salama-humberger-white.png" // Replace with your logo path
              alt="Logo"
              className="w-32 h-32 animate-scale-3d"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
