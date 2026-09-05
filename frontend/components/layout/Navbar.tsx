"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/branding/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "#" },
  { name: "Technology", href: "/technology" },
  { name: "Schools", href: "#" },
  { name: "Innovation Labs", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Schools", href: "/schools" },
  { name: "School Solutions", href: "/school-solutions" },
  { name: "Innovation Labs", href: "/innovation-labs" },
  { name: "School Programs", href: "/school-programs" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo onClick={() => setMobileMenuOpen(false)} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    link.name === "Home"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/book/school-demo"
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none rounded-md p-2 -mr-2"
                aria-label={
                  mobileMenuOpen ? "Close main menu" : "Open main menu"
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-slate-900/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[95] w-[85%] max-w-sm bg-white shadow-2xl flex flex-col lg:hidden pt-24 pb-6 px-6 overflow-y-auto"
          >
            <div className="flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3.5 rounded-xl text-lg font-medium transition-colors ${
                    link.name === "Home"
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-6 border-t border-slate-100"></div>

              <Link
                href="/book/school-demo"
                className="block w-full text-center px-6 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/privacy-policy"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
