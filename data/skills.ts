export interface SkillCategory {
  icon: string;
  title: string;
  items: string[];
}

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
      "Languages: Python, C#, Java, JavaScript",
      "Web: HTML, CSS | DB: MySQL, SQLite",
      "Tools: Figma, VS Code, GitHub",
    ],
  },
];

export interface LabWriteup {
  title: string;
  covered: string;
  learned: string;
  takeaway: string;
  takeawayCode?: string;
}

export const labWriteups: LabWriteup[] = [
  {
    title: "Linux Fundamentals",
    covered:
      "This room provided a foundational understanding of the Linux operating system, focusing on navigating the file system, managing permissions, and utilizing essential command-line tools. It also introduced concepts like piping and redirection.",
    learned:
      "I developed a comfort level with the CLI, learning how to quickly locate files and understand user permissions. This gave me the confidence to move away from GUIs for administrative tasks.",
    takeaway:
      "Mastered the use of the ",
    takeawayCode: "find",
  },
  {
    title: "Network Security & Wireshark",
    covered:
      "An deep dive into packet capture analysis using Wireshark. The room covered identifying anomalous traffic patterns, filtering for specific protocols, and reconstructing TCP streams.",
    learned:
      "I learned how to visually dissect network communication and spot potential malicious activity such as plain-text credential transmission or unauthorized scanning.",
    takeaway: "Utilized Wireshark display filters (like ",
    takeawayCode: 'http.request.method == "POST"',
  },
];
