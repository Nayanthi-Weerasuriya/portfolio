import { certifications, inProgressCerts } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <section id="certifications" className="container section-padding">
      <h2 className="section-title">Certifications &amp; Credentials</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div
            key={`${cert.org}-${cert.title}`}
            className={`cert-card${cert.highlight ? " highlight-card" : ""}`}
          >
            <div className="cert-icon">
              <i className={cert.icon} />
            </div>
            <div className="cert-info">
              <h3>{cert.org}</h3>
              <p>{cert.title}</p>
              <span className={`badge ${cert.badge}`}>{cert.badgeText}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="in-progress-section">
        <h3>
          <i className="fas fa-spinner fa-spin" /> In Progress (APNIC Scholarship)
        </h3>
        <p className="target-date">Target: November 2026</p>
        <ul className="in-progress-list">
          {inProgressCerts.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
