"use client";

import { useState } from "react";
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

function HighlightGrid({ items }: { items: HighlightCard[] }) {
  return (
    <div className="highlights-grid">
      {items.map((item) => (
        <div key={item.title} className="highlight-card">
          {item.date && <div className="date-badge">{item.date}</div>}
          <div className="highlight-image">
            <SafeImage
              src={item.image}
              alt={item.alt}
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
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("work");

  return (
    <section id="experience" className="container section-padding">
      <h2 className="section-title">My Journey &amp; Experience</h2>

      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <div className={`tab-pane${activeTab === "work" ? " active" : ""}`} id="work">
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
            id="societies"
          >
            <HighlightGrid items={societyHighlights} />
          </div>

          <div
            className={`tab-pane${activeTab === "networking" ? " active" : ""}`}
            id="networking"
          >
            <HighlightGrid items={networkingHighlights} />
          </div>

          <div
            className={`tab-pane${activeTab === "achievements" ? " active" : ""}`}
            id="achievements"
          >
            <HighlightGrid items={achievementHighlights} />
          </div>
        </div>
      </div>
    </section>
  );
}
