import type { ReactNode } from "react";

export type Certification = {
  icon: string;
  org: string;
  title: string;
  badge: "completed" | "pending";
  badgeText: string;
  highlight?: boolean;
};

export const certifications: Certification[] = [
  {
    icon: "fas fa-shield-halved",
    org: "IBM",
    title: "Getting Started with Threat Intelligence and Hunting",
    badge: "completed",
    badgeText: "Completed",
  },
  {
    icon: "fas fa-network-wired",
    org: "Cisco",
    title: "Introduction to Cybersecurity",
    badge: "completed",
    badgeText: "Completed",
  },
  {
    icon: "fas fa-globe",
    org: "APNIC",
    title: "Cybersecurity Fundamentals",
    badge: "completed",
    badgeText: "Completed",
  },
  {
    icon: "fas fa-microchip",
    org: "Cisco",
    title: "Introduction to IoT",
    badge: "completed",
    badgeText: "Completed",
  },
  {
    icon: "fas fa-award",
    org: "ISC2",
    title: "Certified in Cybersecurity (CC)",
    badge: "pending",
    badgeText: "Course Completed, Exam Pending",
    highlight: true,
  },
];

export const inProgressCerts = [
  "CompTIA Security+",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
  "Cisco Certified Support Technician — Networking (CCST)",
];

export type SkillCategory = {
  icon: string;
  title: string;
  items: ReactNode[];
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "fas fa-search-shield",
    title: "Security Monitoring",
    items: [
      "Familiarity with SIEM, EDR, NDR, EPP",
      "Security events & log sources",
      "Alert workflows",
    ],
  },
  {
    icon: "fas fa-project-diagram",
    title: "Threat Frameworks",
    items: [
      "Cyber Threat Intelligence (CTI)",
      "IBM X-Force Exchange",
      "MITRE ATT&CK Framework",
      "Adversary tactics, techniques, and mapping IOCs",
    ],
  },
  {
    icon: "fas fa-network-wired",
    title: "Network Analysis",
    items: [
      "Packet capture and traffic analysis",
      "Wireshark",
      "Data Communication & Networking",
    ],
  },
  {
    icon: "fas fa-code",
    title: "Programming & Tools",
    items: [
      <>
        <strong>Languages:</strong> Python, C#, Java, JavaScript
      </>,
      <>
        <strong>Web:</strong> HTML, CSS | <strong>DB:</strong> MySQL, SQLite
      </>,
      <>
        <strong>Tools:</strong> Figma, VS Code, GitHub
      </>,
    ],
  },
  {
    icon: "fas fa-users",
    title: "Soft Skills",
    items: [
      "Strong verbal and written communication skills",
      "Good interpersonal skills",
      "Hands on experience in Microsoft package",
      "Attention to detail",
      "Teamwork and collaboration",
    ],
  },
];

export type Lab = {
  title: string;
  covered: string;
  learned: string;
  takeaway: ReactNode;
};

export const labs: Lab[] = [
  {
    title: "Linux Fundamentals",
    covered:
      "This room provided a foundational understanding of the Linux operating system, focusing on navigating the file system, managing permissions, and utilizing essential command-line tools. It also introduced concepts like piping and redirection.",
    learned:
      "I developed a comfort level with the CLI, learning how to quickly locate files and understand user permissions. This gave me the confidence to move away from GUIs for administrative tasks.",
    takeaway: (
      <>
        Mastered the use of the <code>find</code> command and grep for locating
        specific strings within logs, which is highly applicable for log analysis
        in a SOC environment.
      </>
    ),
  },
  {
    title: "Network Security & Wireshark",
    covered:
      "An deep dive into packet capture analysis using Wireshark. The room covered identifying anomalous traffic patterns, filtering for specific protocols, and reconstructing TCP streams.",
    learned:
      "I learned how to visually dissect network communication and spot potential malicious activity such as plain-text credential transmission or unauthorized scanning.",
    takeaway: (
      <>
        Utilized Wireshark display filters (like{" "}
        <code>http.request.method == &quot;POST&quot;</code>) to rapidly isolate
        suspicious data exfiltration attempts.
      </>
    ),
  },
];

export type Project = {
  image: string;
  alt: string;
  title: string;
  techStack: string;
  description: ReactNode;
  link: string;
  linkLabel: string;
  linkIcon: string;
};

export const projects: Project[] = [
  {
    image: "/img/budget_buddy.png",
    alt: "Budget Buddy",
    title: "Budget Buddy",
    techStack: "Python • Tkinter",
    description:
      "A desktop application developed to help users track expenses and manage personal budgets effectively with a graphical interface.",
    link: "https://github.com/Nayanthi-Weerasuriya/budget_buddy",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    image: "/img/smart_hr.png",
    alt: "Smart HR",
    title: "Smart HR Employee & Payroll Manager",
    techStack: "C# • SQLite",
    description:
      "A comprehensive system designed to manage employee records, calculate payroll, and streamline HR processes.",
    link: "https://github.com/Nayanthi-Weerasuriya/SmartHR_Employee_Manager",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    image: "/img/oneid_group.png",
    alt: "OneID Group",
    title: "OneID",
    techStack: "HTML • CSS • PHP • SASS",
    description:
      "An Integrated e-Government Services Application centralizing essential public services (NIC verification, birth certificates, fine payments) into a single digital platform.",
    link: "https://github.com/Harsha-Fernando/OneID-jpura",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    image: "/img/uniconnect.png",
    alt: "Uniconnect",
    title: "Uniconnect",
    techStack: "Spring Boot • Svelte • Astro • Java",
    description:
      "A collaborative university platform bridging undergraduates, department heads, mentors, and industry, built across ITC 3373 & ITC 3375. Promoted academic and industry collaboration for a 9-member team.",
    link: "https://github.com/Department-of-IT-FMSC-USJ/oop-project-final-uni-connect",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    image: "/img/uniapi_screenshot.png",
    alt: "uniapi.lk",
    title: "uniapi.lk",
    techStack: "Web Platform • Social Impact",
    description: (
      <>
        A platform giving Sri Lankan students detailed insights into government
        university degree programs — course structures, yearly subjects, and GPA
        requirements. Benefited over <strong>5,000 students</strong> in making
        informed academic decisions.
      </>
    ),
    link: "https://uniapi.lk",
    linkLabel: "Visit Platform",
    linkIcon: "fas fa-external-link-alt",
  },
];

export type HighlightCard = {
  date?: string;
  image: string;
  alt: string;
  tags: string[];
  title: string;
  description: ReactNode;
};

export const workExperience = {
  role: "Audit Trainee",
  date: "June 2023 – July 2024",
  company: "Dyfferense Consultants",
  bullets: [
    "Evaluated internal controls across five clients including pharmaceutical, identifying compliance gaps and control weaknesses while applying analytical and investigative techniques transferable to cybersecurity risk assessment and incident analysis.",
    "Produced audit working papers and compliance documentation across five engagements under tight regulatory deadlines, maintaining accurate evidence records and collaborating with multidisciplinary teams to support timely audit completion.",
    "Investigated financial records to identify anomalies and control exceptions, documenting evidence and escalating significant findings to senior auditors, strengthening analytical and risk assessment skills.",
  ],
};

export const societyHighlights: HighlightCard[] = [
  {
    date: "2026",
    image: "/img/cybersummit_ocp.jpg",
    alt: "Cyber Summit 2026",
    tags: ["ISACA USJ", "Leadership"],
    title: "Delegate Manager - Cyber Summit '26",
    description:
      "Proud to have served as the Delegate Manager for the Organizing Committee of Cyber Summit 2026. Handled participant coordination and ensured smooth communication leading up to the main event.",
  },
  {
    date: "March 2026",
    image: "/img/isaca_pom_march.jpg",
    alt: "ISACA Performer of the Month - March",
    tags: ["Recognition", "ISACA USJ"],
    title: "Performer of the Month — March 2026",
    description:
      "Recognized as Performer of the Month in March 2026 for member recruitment efforts and active involvement in organizing Cyber Summit 2026.",
  },
  {
    date: "2025/26",
    image: "/img/sparsha25_committee.jpg",
    alt: "Sparsha'25 Finance Committee",
    tags: ["Event Management", "Finance"],
    title: "Finance Crew OC Member — Sparsha'25",
    description:
      "Served as an Organizing Committee Member for the Finance Crew of Sparsha'25, managing event budget and financial coordination to ensure a successful execution.",
  },
  {
    date: "2025/26",
    image: "/img/isaca_squad_leader.jpg",
    alt: "ISACA Squad Leaders 2025/2026",
    tags: ["ISACA USJ", "Leadership"],
    title: "Squad Leader — Member Training (2025/26)",
    description:
      "Appointed as Squad Leader for the Member Training Squad at the ISACA Student Group USJ for the term 2025/2026. Responsible for creating impactful learning experiences and empowering members through training and development.",
  },
  {
    date: "December 2025",
    image: "/img/isaca_pom_dec.jpg",
    alt: "ISACA Performer of the Month - December",
    tags: ["Recognition", "ISACA USJ"],
    title: "Performer of the Month — December 2025",
    description:
      "Recognized as Performer of the Month in December 2025 for conducting the Management Faculty awareness session.",
  },
  {
    date: "October 2025",
    image: "/img/project_safe_space.jpg",
    alt: "Project Safe Space",
    tags: ["ISACA CSR", "Cybersecurity Awareness"],
    title: "PR Personnel — Project Safe Space",
    description:
      "Joined the PR & Networking Crew for Project Safe Space (ISACA USJ CSR initiative), focused on creating awareness and fostering safe, supportive digital communities. Contributed to Phase 1 at St. Paul's Milagiriya School, engaging 30+ students.",
  },
  {
    date: "2025",
    image: "/img/dhack25_committee.jpg",
    alt: "dHack 25 Finance Committee",
    tags: ["S@IT", "Event Management"],
    title: "Finance Committee — dHack '25",
    description:
      "Joined the Finance Organizing Committee for dHack '25, a Designathon organized by S@IT, University of Sri Jayewardenepura. Responsibilities included financial planning, sponsorship acquisition, and fund management to ensure the smooth execution of this innovation event.",
  },
];

export const networkingHighlights: HighlightCard[] = [
  {
    date: "April 2026",
    image: "/img/dialog_visit.jpg",
    alt: "Dialog Axiata Field Visit",
    tags: ["Industry Visit", "Dialog Axiata"],
    title: "Industry Field Visit — Dialog Data Center & Media Hub",
    description:
      "Visited the Dialog Axiata PLC Data Center and Dialog TV Media Hub. Observed enterprise-level server infrastructure, advanced cooling systems, high-availability setups, and television broadcasting processes.",
  },
  {
    date: "February 2026",
    image: "/img/wicys_post.jpg",
    alt: "WiCyS Cyber Handshake",
    tags: ["WiCyS", "Community"],
    title: "Cyber Handshake Event",
    description:
      "Participated in Cyber Handshake, the first in-person community event organized by Women in CyberSecurity (WiCyS) Sri Lanka, promoting collaboration, inclusion, and networking among women in tech.",
  },
  {
    date: "January 2026",
    image: "/img/isaca_inaction.jpg",
    alt: "Cybersecurity in Action",
    tags: ["ISACA", "Knowledge Sharing"],
    title: "Cybersecurity in Action Session",
    description:
      "Engaged in a valuable knowledge-sharing session hosted by ISACA USJ and facilitated by Mr. Namodh E. (CISSP, OSCP) to bridge the gap between theory and real-world practice.",
  },
  {
    date: "2025",
    image: "/img/cybersummit25.jpg",
    alt: "Cyber Summit 2025",
    tags: ["ISACA", "Summit"],
    title: "Cyber Summit 2025 — Participant",
    description:
      "Thrilled to have participated in Cyber Summit 2025 organized by the USJ ISACA Student Group — a remarkable event focused on the future of cybersecurity and emerging industry trends. Engaged with inspiring experts and peers passionate about the field.",
  },
  {
    date: "December 2024",
    image: "/img/ifs_visit.jpg",
    alt: "IFS Field Visit",
    tags: ["Industry Visit", "IFS"],
    title: "Industry Field Visit — IFS R&D International",
    description:
      "Participated in an insightful industry visit to IFS R&D International (Pvt) Ltd organized by the Department of IT, USJ. Explored enterprise software development processes and gained real-world exposure to industry practices.",
  },
  {
    date: "Late 2024",
    image: "/img/motivational_speech.jpg",
    alt: "Motivational Speech",
    tags: ["Public Speaking", "Community"],
    title: "Motivational Speech — Student-Parent Gathering",
    description:
      "Had the privilege of delivering a motivational speech at a student-parent gathering, balancing inspiring messages for a younger audience while sharing meaningful insights for parents. Sharpened communication and public speaking skills in the process.",
  },
];

export const achievementHighlights: HighlightCard[] = [
  {
    image: "/img/cryptx_post.jpg",
    alt: "CRYPTX 2.0 Designathon",
    tags: ["Hackathon", "Design Thinking"],
    title: "2nd Runners-Up: CRYPTX 2.0",
    description:
      "Secured Second Runners-Up at the CRYPTX 2.0 Designathon (Faculty of Technology, USJP). Challenged to solve complex problems and transform ideas into impactful design solutions over multiple competitive rounds.",
  },
  {
    image: "/img/dhack25_winners.jpg",
    alt: "D'Hack 2025 Winners",
    tags: ["1st Place", "UI/UX"],
    title: "Winners — D'Hack 2025 Redesign Category",
    description: (
      <>
        Team Uxperts emerged as <strong>Winners of the Redesign Category</strong>{" "}
        at D&apos;Hack 2025 (S@IT, USJP). Collaborated with teammates Avindi
        Getawakanda and Nethini Bandara to deliver a creative, impactful design
        solution under competition pressure.
      </>
    ),
  },
  {
    image: "/img/al_prizegiving.jpg",
    alt: "A/L Prize Giving",
    tags: ["Academic", "Island Rank"],
    title: "G.C.E. A/L — Island Rank 16, District Rank 6",
    description: (
      <>
        Recognized at school&apos;s Prize Giving 2022 for Academic Excellence in
        the Commerce Stream. Secured <strong>Island Rank 16</strong> and{" "}
        <strong>Colombo District Rank 6</strong> at the G.C.E. (A/L) 2022/23
        examination — a result of consistent discipline and dedication.
      </>
    ),
  },
];
