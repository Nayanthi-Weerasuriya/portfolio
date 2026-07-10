// ─── Work Experience ─────────────────────────────────────────────────────────

export interface WorkItem {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export const workExperience: WorkItem[] = [
  {
    role: "Audit Trainee",
    company: "Dyfferense Consultants",
    date: "June 2023 – July 2024",
    bullets: [
      "Evaluated internal controls across five clients including pharmaceutical, identifying compliance gaps and control weaknesses while applying analytical and investigative techniques transferable to cybersecurity risk assessment and incident analysis.",
      "Produced audit working papers and compliance documentation across five engagements under tight regulatory deadlines, maintaining accurate evidence records and collaborating with multidisciplinary teams to support timely audit completion.",
      "Investigated financial records to identify anomalies and control exceptions, documenting evidence and escalating significant findings to senior auditors, strengthening analytical and risk assessment skills.",
    ],
  },
];

// ─── Highlight Card (used by Societies, Networking, Achievements) ─────────────

export interface HighlightCard {
  dateBadge?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
}

// ─── Societies Activities ─────────────────────────────────────────────────────

export const societiesCards: HighlightCard[] = [
  {
    dateBadge: "2026",
    image: "/img/cybersummit_ocp.jpg",
    imageAlt: "Cyber Summit 2026",
    tags: ["ISACA USJ", "Leadership"],
    title: "Delegate Manager - Cyber Summit '26",
    description:
      "Proud to have served as the Delegate Manager for the Organizing Committee of Cyber Summit 2026. Handled participant coordination and ensured smooth communication leading up to the main event.",
  },
  {
    dateBadge: "March 2026",
    image: "/img/isaca_pom_march.jpg",
    imageAlt: "ISACA Performer of the Month - March",
    tags: ["Recognition", "ISACA USJ"],
    title: "Performer of the Month — March 2026",
    description:
      "Recognized as Performer of the Month in March 2026 for member recruitment efforts and active involvement in organizing Cyber Summit 2026.",
  },
  {
    dateBadge: "2025/26",
    image: "/img/sparsha25_committee.jpg",
    imageAlt: "Sparsha'25 Finance Committee",
    tags: ["Event Management", "Finance"],
    title: "Finance Crew OC Member — Sparsha'25",
    description:
      "Served as an Organizing Committee Member for the Finance Crew of Sparsha'25, managing event budget and financial coordination to ensure a successful execution.",
  },
  {
    dateBadge: "2025/26",
    image: "/img/isaca_squad_leader.jpg",
    imageAlt: "ISACA Squad Leaders 2025/2026",
    tags: ["ISACA USJ", "Leadership"],
    title: "Squad Leader — Member Training (2025/26)",
    description:
      "Appointed as Squad Leader for the Member Training Squad at the ISACA Student Group USJ for the term 2025/2026. Responsible for creating impactful learning experiences and empowering members through training and development.",
  },
  {
    dateBadge: "December 2025",
    image: "/img/isaca_pom_dec.jpg",
    imageAlt: "ISACA Performer of the Month - December",
    tags: ["Recognition", "ISACA USJ"],
    title: "Performer of the Month — December 2025",
    description:
      "Recognized as Performer of the Month in December 2025 for conducting the Management Faculty awareness session.",
  },
  {
    dateBadge: "October 2025",
    image: "/img/project_safe_space.jpg",
    imageAlt: "Project Safe Space",
    tags: ["ISACA CSR", "Cybersecurity Awareness"],
    title: "PR Personnel — Project Safe Space",
    description:
      "Joined the PR & Networking Crew for Project Safe Space (ISACA USJ CSR initiative), focused on creating awareness and fostering safe, supportive digital communities. Contributed to Phase 1 at St. Paul's Milagiriya School, engaging 30+ students.",
  },
  {
    dateBadge: "2025",
    image: "/img/dhack25_committee.jpg",
    imageAlt: "dHack 25 Finance Committee",
    tags: ["S@IT", "Event Management"],
    title: "Finance Committee — dHack '25",
    description:
      "Joined the Finance Organizing Committee for dHack '25, a Designathon organized by S@IT, University of Sri Jayewardenepura. Responsibilities included financial planning, sponsorship acquisition, and fund management to ensure the smooth execution of this innovation event.",
  },
];

// ─── Networking Events ────────────────────────────────────────────────────────

export const networkingCards: HighlightCard[] = [
  {
    dateBadge: "April 2026",
    image: "/img/dialog_visit.jpg",
    imageAlt: "Dialog Axiata Field Visit",
    tags: ["Industry Visit", "Dialog Axiata"],
    title: "Industry Field Visit — Dialog Data Center & Media Hub",
    description:
      "Visited the Dialog Axiata PLC Data Center and Dialog TV Media Hub. Observed enterprise-level server infrastructure, advanced cooling systems, high-availability setups, and television broadcasting processes.",
  },
  {
    dateBadge: "February 2026",
    image: "/img/wicys_post.jpg",
    imageAlt: "WiCyS Cyber Handshake",
    tags: ["WiCyS", "Community"],
    title: "Cyber Handshake Event",
    description:
      "Participated in Cyber Handshake, the first in-person community event organized by Women in CyberSecurity (WiCyS) Sri Lanka, promoting collaboration, inclusion, and networking among women in tech.",
  },
  {
    dateBadge: "January 2026",
    image: "/img/isaca_inaction.jpg",
    imageAlt: "Cybersecurity in Action",
    tags: ["ISACA", "Knowledge Sharing"],
    title: "Cybersecurity in Action Session",
    description:
      "Engaged in a valuable knowledge-sharing session hosted by ISACA USJ and facilitated by Mr. Namodh E. (CISSP, OSCP) to bridge the gap between theory and real-world practice.",
  },
  {
    dateBadge: "2025",
    image: "/img/cybersummit25.jpg",
    imageAlt: "Cyber Summit 2025",
    tags: ["ISACA", "Summit"],
    title: "Cyber Summit 2025 — Participant",
    description:
      "Thrilled to have participated in Cyber Summit 2025 organized by the USJ ISACA Student Group — a remarkable event focused on the future of cybersecurity and emerging industry trends. Engaged with inspiring experts and peers passionate about the field.",
  },
  {
    dateBadge: "December 2024",
    image: "/img/ifs_visit.jpg",
    imageAlt: "IFS Field Visit",
    tags: ["Industry Visit", "IFS"],
    title: "Industry Field Visit — IFS R&D International",
    description:
      "Participated in an insightful industry visit to IFS R&D International (Pvt) Ltd organized by the Department of IT, USJ. Explored enterprise software development processes and gained real-world exposure to industry practices.",
  },
  {
    dateBadge: "Late 2024",
    image: "/img/motivational_speech.jpg",
    imageAlt: "Motivational Speech",
    tags: ["Public Speaking", "Community"],
    title: "Motivational Speech — Student-Parent Gathering",
    description:
      "Had the privilege of delivering a motivational speech at a student-parent gathering, balancing inspiring messages for a younger audience while sharing meaningful insights for parents. Sharpened communication and public speaking skills in the process.",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievementsCards: HighlightCard[] = [
  {
    image: "/img/cryptx_post.jpg",
    imageAlt: "CRYPTX 2.0 Designathon",
    tags: ["Hackathon", "Design Thinking"],
    title: "2nd Runners-Up: CRYPTX 2.0",
    description:
      "Secured Second Runners-Up at the CRYPTX 2.0 Designathon (Faculty of Technology, USJP). Challenged to solve complex problems and transform ideas into impactful design solutions over multiple competitive rounds.",
  },
  {
    image: "/img/dhack25_winners.jpg",
    imageAlt: "D'Hack 2025 Winners",
    tags: ["1st Place", "UI/UX"],
    title: "Winners — D'Hack 2025 Redesign Category",
    description:
      "Team Uxperts emerged as Winners of the Redesign Category at D'Hack 2025 (S@IT, USJP). Collaborated with teammates Avindi Getawakanda and Nethini Bandara to deliver a creative, impactful design solution under competition pressure.",
  },
  {
    image: "/img/al_prizegiving.jpg",
    imageAlt: "A/L Prize Giving",
    tags: ["Academic", "Island Rank"],
    title: "G.C.E. A/L — Island Rank 16, District Rank 6",
    description:
      "Recognized at school's Prize Giving 2022 for Academic Excellence in the Commerce Stream. Secured Island Rank 16 and Colombo District Rank 6 at the G.C.E. (A/L) 2022/23 examination — a result of consistent discipline and dedication.",
  },
];
