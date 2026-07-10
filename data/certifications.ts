export interface Certification {
  icon: string;
  issuer: string;
  name: string;
  status: "completed" | "pending";
  badgeLabel: string;
}

export interface InProgressCert {
  name: string;
}

export const certifications: Certification[] = [
  {
    icon: "fas fa-shield-halved",
    issuer: "IBM",
    name: "Getting Started with Threat Intelligence and Hunting",
    status: "completed",
    badgeLabel: "Completed",
  },
  {
    icon: "fas fa-network-wired",
    issuer: "Cisco",
    name: "Introduction to Cybersecurity",
    status: "completed",
    badgeLabel: "Completed",
  },
  {
    icon: "fas fa-globe",
    issuer: "APNIC",
    name: "Cybersecurity Fundamentals",
    status: "completed",
    badgeLabel: "Completed",
  },
  {
    icon: "fas fa-microchip",
    issuer: "Cisco",
    name: "Introduction to IoT",
    status: "completed",
    badgeLabel: "Completed",
  },
  {
    icon: "fas fa-award",
    issuer: "ISC2",
    name: "Certified in Cybersecurity (CC)",
    status: "pending",
    badgeLabel: "Course Completed, Exam Pending",
  },
];

export const inProgressCerts: InProgressCert[] = [
  { name: "CompTIA Security+" },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
  },
  {
    name: "Cisco Certified Support Technician — Networking (CCST)",
  },
];
