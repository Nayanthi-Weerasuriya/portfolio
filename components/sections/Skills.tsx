import { labs, skillCategories } from "@/lib/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="container section-padding">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>
              <i className={category.icon} /> {category.title}
            </h3>
            <ul>
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="labs-section-skills" style={{ marginTop: "3rem" }}>
        <h3
          style={{
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "var(--accent-primary)",
          }}
        >
          Practical Labs
        </h3>

        <div className="thm-stats-card" style={{ marginBottom: "2rem" }}>
          <div className="thm-logo">
            <i className="fas fa-terminal" /> TryHackMe
          </div>
          <div className="thm-stats">
            <div className="stat-item">
              <span className="stat-value">Top 75%</span>
              <span className="stat-label">Rank</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4</span>
              <span className="stat-label">Rooms Completed</span>
            </div>
          </div>
        </div>

        <div className="labs-grid">
          {labs.map((lab) => (
            <div key={lab.title} className="lab-card">
              <h3>{lab.title}</h3>
              <p>
                <strong>What it covered:</strong> {lab.covered}
              </p>
              <p>
                <strong>What I learned:</strong> {lab.learned}
              </p>
              <p>
                <strong>Technical Takeaway:</strong> {lab.takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
