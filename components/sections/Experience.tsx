"use client";

import { useEffect, useState } from "react";
import SafeImage from "@/components/SafeImage";
import {
  achievementHighlights,
  networkingHighlights,
  societyHighlights,
  workExperience,
  type HighlightCard,
} from "@/lib/portfolio-data";

const tabs = [
  { id: "work", label: "Work Experience" },
  { id: "societies", label: "Societies Activities" },
  { id: "networking", label: "Networking Events" },
  { id: "achievements", label: "Achievements" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function HighlightCarousel({ items }: { items: HighlightCard[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % items.length);
  };

  useEffect(() => {
    if (items.length < 2) return;

    const intervalId = window.setInterval(showNext, 2000);
    return () => window.clearInterval(intervalId);
  }, [items.length]);

  return (
    <div className="experience-carousel" aria-roledescription="carousel">
      <div className="experience-card-wrap">
        <div key={currentItem.title} className="highlight-card experience-card">
          {currentItem.date && <div className="date-badge">{currentItem.date}</div>}
          <div className="highlight-image">
            <SafeImage
              src={currentItem.image}
              alt={currentItem.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div className="highlight-content">
            <div className="highlight-tags">
              {currentItem.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{currentItem.title}</h3>
            <p>{currentItem.description}</p>
          </div>
        </div>
      </div>

      {items.length > 1 && (
        <div className="carousel-controls">
          <button type="button" onClick={showPrevious} aria-label="Show previous item">
            <i className="fas fa-arrow-left" aria-hidden="true" />
          </button>
          <div className="carousel-dots" aria-label="Select an item">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeIndex ? "active" : ""}
                aria-label={`Show item ${index + 1} of ${items.length}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Show next item">
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("work");

  return (
    <section id="experience" className="container section-padding">
      <h2 className="section-title">My Journey &amp; Experience</h2>

      <div className="tabs-container">
        <div className="tabs-header" role="tablist" aria-label="Experience categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <div
            className={`tab-pane${activeTab === "work" ? " active" : ""}`}
            id="work-panel"
            role="tabpanel"
          >
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{workExperience.role}</h3>
                    <span className="timeline-date">{workExperience.date}</span>
                  </div>
                  <h4>{workExperience.company}</h4>
                  <ul>
                    {workExperience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`tab-pane${activeTab === "societies" ? " active" : ""}`}
            id="societies-panel"
            role="tabpanel"
          >
            <HighlightCarousel items={societyHighlights} />
          </div>

          <div
            className={`tab-pane${activeTab === "networking" ? " active" : ""}`}
            id="networking-panel"
            role="tabpanel"
          >
            <HighlightCarousel items={networkingHighlights} />
          </div>

          <div
            className={`tab-pane${activeTab === "achievements" ? " active" : ""}`}
            id="achievements-panel"
            role="tabpanel"
          >
            <HighlightCarousel items={achievementHighlights} />
          </div>
        </div>
      </div>
    </section>
  );
}
