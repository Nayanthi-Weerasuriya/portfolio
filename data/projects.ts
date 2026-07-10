export interface Project {
  title: string;
  tech: string;
  description: string;
  repoUrl: string;
  image: string;
  linkLabel: string;
  linkIcon: string;
}

export const projects: Project[] = [
  {
    title: "Budget Buddy",
    tech: "Python • Tkinter",
    description:
      "A desktop application developed to help users track expenses and manage personal budgets effectively with a graphical interface.",
    repoUrl: "https://github.com/Nayanthi-Weerasuriya/budget_buddy",
    image: "/img/budget_buddy.png",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    title: "Smart HR Employee & Payroll Manager",
    tech: "C# • SQLite",
    description:
      "A comprehensive system designed to manage employee records, calculate payroll, and streamline HR processes.",
    repoUrl:
      "https://github.com/Nayanthi-Weerasuriya/SmartHR_Employee_Manager",
    image: "/img/smart_hr.png",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    title: "OneID",
    tech: "HTML • CSS • PHP • SASS",
    description:
      "An Integrated e-Government Services Application centralizing essential public services (NIC verification, birth certificates, fine payments) into a single digital platform.",
    repoUrl: "https://github.com/Harsha-Fernando/OneID-jpura",
    image: "/img/oneid_group.png",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    title: "Uniconnect",
    tech: "Spring Boot • Svelte • Astro • Java",
    description:
      "A collaborative university platform bridging undergraduates, department heads, mentors, and industry, built across ITC 3373 & ITC 3375. Promoted academic and industry collaboration for a 9-member team.",
    repoUrl:
      "https://github.com/Department-of-IT-FMSC-USJ/oop-project-final-uni-connect",
    image: "/img/uniconnect.png",
    linkLabel: "View Repository",
    linkIcon: "fab fa-github",
  },
  {
    title: "uniapi.lk",
    tech: "Web Platform • Social Impact",
    description:
      "A platform giving Sri Lankan students detailed insights into government university degree programs — course structures, yearly subjects, and GPA requirements. Benefited over 5,000 students in making informed academic decisions.",
    repoUrl: "https://uniapi.lk",
    image: "/img/uniapi_screenshot.png",
    linkLabel: "Visit Platform",
    linkIcon: "fas fa-external-link-alt",
  },
];
