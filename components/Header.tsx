"use client";

import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = ["hero", ...navLinks.map((l) => l.id)];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      header.style.boxShadow = y > 50 ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "none";
      header.style.backgroundColor =
        y > 50 ? "rgba(11, 17, 32, 0.98)" : "rgba(11, 17, 32, 0.9)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const toggleMenu = () => {
    if (menuOpen) closeMenu();
    else openMenu();
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <>
      <header id="header" className={scrolled ? "header-scrolled" : ""}>
        <nav className="container nav-container">
          <button type="button" className="logo logo-btn" onClick={scrollToTop}>
            NW
          </button>
          <ul className={`nav-links${menuOpen ? " open" : ""}`} id="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Hire Me
          </a>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            id="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>
      <div
        className={`nav-overlay${menuOpen ? " open" : ""}`}
        id="nav-overlay"
        onClick={closeMenu}
        role="presentation"
      />
    </>
  );
}
