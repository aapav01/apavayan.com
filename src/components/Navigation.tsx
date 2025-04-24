'use client';

import React, { useState, useEffect } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/aapav01",
    icon: IoLogoGithub,
    hoverColor: "hover:text-zinc-700",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/apavayan/",
    icon: IoLogoLinkedin,
    hoverColor: "hover:text-blue-800",
    label: "LinkedIn"
  }
];

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-lg' : ''
    }`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-4">
          <div className="flex gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl text-primary ${social.hoverColor} transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 