"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Innovation from "./Innovation";



const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function HeroSectionThree() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    // BUG FIX: changed bg-white to dark background for the techy aesthetic
    <div className="bg-gray-200 dark:bg-gray-950 min-h-screen">

      {/* Subtle grid overlay for matrix/cyber texture */}
      {/* <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,128,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      /> */}
       

      {/* Two column hero section */}
      
    <Innovation />
    </div>
  
  );
}