"use client";

import { useCallback, useEffect, useState } from "react";
import SafeImage from "@/components/SafeImage";

const roles = [
  "Cybersecurity Analyst",
  "SOC & Threat Intelligence",
  "Security Operations",
  "Controls & Risk Assessment",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Nayanthi Weerasuriya</h1>

          <h2 className="hero-tagline">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </h2>

          <p className="hero-summary">
            Business Information Systems undergraduate building a cybersecurity
            specialization through audit experience, hands-on labs, and targeted
            coursework. I bring a controls-oriented, evidence-driven mindset
            from my audit background—directly transferable to SOC alert triage
            and incident investigation.
          </p>

          <div className="hero-cta">
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollTo("#skills")}
            >
              View My Skills <i className="fas fa-arrow-right" />
            </button>
            <button
              type="button"
              className="btn-outline hero-btn-secondary"
              onClick={() => scrollTo("#contact")}
            >
              Get In Touch
            </button>
            <a
              href="https://linkedin.com/in/nayanthi-weerasuriya-457560268"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline hero-btn-secondary"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </div>

          <div className="social-links">
            <a href="mailto:nayanthiweerasuriya@gmail.com" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://linkedin.com/in/nayanthi-weerasuriya-457560268"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/Nayanthi-Weerasuriya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://tryhackme.com/p/nayanthiweerasuriya2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TryHackMe"
            >
              <i className="fas fa-terminal" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="headshot-placeholder">
              <SafeImage
                src="/img/profile.png"
                alt="Nayanthi Weerasuriya"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
