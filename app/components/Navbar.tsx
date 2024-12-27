"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the whole navbar on mount
  const navbarVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  const islandVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.03 },
  };

  const linkHover = {
    hover: { scale: 1.1, color: "#60a5fa" },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1e40af",
    },
  };

  return (
    <AnimatePresence>
      <motion.header
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // Match main page color; add slight transparency & blur when scrolled
        style={{
          backgroundColor: scrolled ? "rgba(14, 14, 14, 0.7)" : "#0e0e0e",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(6px)" : "none",
        }}
        className="
          fixed top-0 left-0 w-full z-50 
          flex items-center justify-between 
          h-20 px-6
          shadow-md
          transition-colors duration-300
        "
      >
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Horizon Labs Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <motion.span
            className="text-white text-2xl font-semibold select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Horizon Labs
          </motion.span>
        </Link>

        {/* Center: Detached “Island” */}
        <motion.nav
          variants={islandVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.4 }}
          className="
            flex items-center justify-center
            p-4 px-6
            gap-8
            rounded-2xl 
            bg-zinc-800/90 dark:bg-zinc-800/90
            ring-1 ring-zinc-700
            shadow-2xl
            ml-[calc(10%-20rem)]
          "
        >
          {[
            { label: "IRPO", href: "https://irpo.net" },
            { label: "Solutions", href: "/solutions" },
            { label: "Research", href: "/research" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <motion.div
              key={link.label}
              variants={linkHover}
              whileHover="hover"
              className="text-center"
            >
              <Link className="text-white font-medium" href={link.href}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right: Sign Up Button */}
        <motion.div variants={buttonHover} whileHover="hover">
          <Link
            href="https://discord.gg/jCT5jbPJpM"
            className="
              bg-blue-600 text-white
              font-semibold py-2 px-5 
              rounded-md
              shadow
              transition-transform
            "
          >
            Join Us
          </Link>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
}
