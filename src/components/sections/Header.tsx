"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/", label: "Work" },
  { href: "/shop", label: "Shop" },
  { href: "/cv-contact", label: "CV & Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile and Tablet Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-6 bg-primary-bg">
        <Link 
          href="/" 
          className="font-heading text-accent-orange-red text-2xl tracking-[-0.04em]"
        >
          LV—©2025
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-text-primary"
          aria-label="Open menu"
        >
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99219 27.8335H32.9922M5.99219 18.8335H32.9922M5.99219 9.8335H32.9922" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-primary-bg z-50 p-5 flex flex-col transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-heading text-accent-orange-red text-2xl tracking-[-0.04em]"
          >
            LV—©2025
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-text-primary"
            aria-label="Close menu"
          >
             <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.4938 10.1665L10.4938 28.1665M10.4938 10.1665L28.4938 28.1665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <nav className="flex-grow flex items-center justify-start mt-[-50px]">
          <ul className="flex flex-col items-start gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-4xl text-text-primary hover:text-accent-orange-red transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Header */}
      <header className="hidden lg:block fixed top-10 right-10 z-50">
        <nav>
          <ul className="flex flex-col items-end gap-[2px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-body text-[2rem] leading-[1.1] text-text-primary hover:text-accent-orange-red transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;