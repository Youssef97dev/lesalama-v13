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
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
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
      )}
    </>
  );
};

export default Loader;
