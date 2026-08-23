import imgYoga from "../assets/projects/yoga.jpg";
import imgHotel from "../assets/projects/hotel.jpg";
import imgTaxi from "../assets/projects/taxi.jpg";
import imgKiosk from "../assets/projects/kiosk.jpg";
import imgTravel from "../assets/projects/travel.jpg";

export const profile = {
  name: "KHUBU JAISWAL",
  firstName: "Khusbu Jaiswal",
  role: "Team Lead",
  tagline: "Frontend & Web Development",
  email: "khj98047@gmail.com",
  handle: "@KhusbuJays01",
  github: "https://github.com/KhusbuJays01",
  linkedin: "https://www.linkedin.com/in/khusbu-jayswal-821602280",
  location: "Bhaktapur, Nepal",
  languages: ["English", "Hindi", "Nepali"],
  short:
    "Frontend-focused developer & team lead shipping scalable web apps with React, TypeScript & Tailwind — and leading the teams that build them.",
  summary: [
    "Results-driven software developer and team lead with 5+ years of hands-on experience in frontend development, with expertise in React.js, HTML, CSS, JavaScript, TypeScript and Tailwind CSS. Proven record of leading teams of 8–15 developers to deliver high-quality, scalable web applications.",
    "Skilled in agile development, project delivery, code reviews and mentoring junior developers, with a strong understanding of UI/UX principles and a focus on building user-friendly interfaces.",
    "Solid grasp of SEO, accessibility and performance optimization — and a track record of coordinating cross-functional teams and partnering with product teams to set and meet business goals.",
  ],
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "15", label: "Developers led & mentored" },
    { value: "30%", label: "Faster delivery cycles" },
    { value: "40%", label: "Lower page-load times" },
  ],
};

export interface Job {
  role: string;
  company: string;
  dates: string;
  location: string;
  promoted?: boolean;
  points: string[];
}

export const experience: Job[] = [
  {
    role: "Team Lead",
    company: "SmartAcre Media Solutions",
    dates: "Dec 2023 — Present",
    location: "Imadole(Lalitpur), Nepal",
    promoted: true,
    points: [
      "Lead a team of 8–15 developers, responsible for sprint planning, code reviews, assigning work to junior developers and coordinating with the business.",
      "Act as the primary point of contact for the development team, managing requirements — translating business needs into technical tasks and milestones.",
      "Introduced and enforced a Git branching strategy (Git Flow) across the team, improving code-review turnaround and overall code quality.",
      "Reduced project delivery cycles by ~30% through task re-prioritization and agile sprint planning, including GitLab CI/CD pipelines, Jira and Git version control.",
      "Organized bi-weekly tech talks and knowledge-sharing sessions to keep team skills current and cross-functional.",
      "Collaborated with designers and clients to ensure final deliverables met both business requirements and design standards.",
    ],
  },
  {
    role: "Jr. Software Developer and Sr. Software Developer",
    company: "SmartAcre Media Solutions",
    dates: "2020 — Dec 2023",
    location: "Imadole(Lalitpur), Nepal",
    points: [
      "Designed and developed responsive web applications using HTML, CSS, JavaScript and AngularJS, working closely with designers and fellow developers.",
      "Worked with jQuery, GitLab and Git to manage code versioning and streamline team collaboration.",
      "Built and maintained existing projects through disciplined code reviews, applying various CSS and Git branching strategies aligned with team guidelines.",
      "Optimized application performance by improving load times via lazy loading and code-splitting strategies.",
      "Provided mentorship and code-review feedback that consistently improved the quality of legacy and in-flight projects.",
      "Collaborated with clients, designers and stakeholders on new-feature development and enhancements across digital projects.",
    ],
  },
];

export interface Project {
  file: string;
  title: string;
  year: string;
  desc: string;
  impact: string;
  tech: string[];
  img: string;
}

export const projects: Project[] = [
  {
    file: "yoga-posture-detection/",
    title: "Yoga Posture Detection & Correction System",
    year: "2025",
    desc: "ML-powered web system that reads a browser camera feed, detects misaligned yoga postures in real time and draws a live skeleton overlay with guided, joint-by-joint corrections.",
    impact: "Improved learner session accuracy by ~40% and cut instructor correction time through instant in-app feedback.",
    tech: ["React", "TypeScript", "MediaPipe", "TensorFlow", "Tailwind CSS"],
    img: imgYoga,
  },
  {
    file: "hotel-booking-system/",
    title: "Hotel Booking System",
    year: "2024",
    desc: "Responsive hotel discovery & booking platform with dynamic search, room availability calendar, price comparison and secure JWT-protected checkout.",
    impact: "Cut page-load time by 40% via optimized queries and lazy-loaded imagery, lifting checkout conversion.",
    tech: ["React", "Redux", "Node.js", "MySQL", "JWT Auth"],
    img: imgHotel,
  },
  {
    file: "taxi-booking-system/",
    title: "Taxi Booking System",
    year: "2023",
    desc: "Ride-booking platform with live driver tracking on the map, instant fare estimation, trip history and in-app payment flow.",
    impact: "3-second booking flow with real-time ETA updates over WebSockets, trusted by pilot users across 3 cities.",
    tech: ["React", "Socket.io", "Node.js", "Maps API"],
    img: imgTaxi,
  },
  {
    file: "student-kiosk-service/",
    title: "Student Kiosk Service",
    year: "2022",
    desc: "Self-service kiosk application for university students to manage schedules, grades and add/drop course registrations on campus terminals.",
    impact: "Reduced staff workload by 25% during peak semester and lifted student satisfaction scores in campus surveys.",
    tech: ["React", "REST APIs", "GitLab CI", "UX Research"],
    img: imgKiosk,
  },
  {
    file: "travel-booking-platform/",
    title: "Travel Booking Website",
    year: "2021",
    desc: "Fully responsive booking platform with dynamic search, fare comparison, user authentication and real-time seat availability.",
    impact: "Docker + Nginx deployment cut average page-load time by 40%, backed by secure JWT auth and optimized SQL queries.",
    tech: ["React", "Redux", "Node.js", "Express", "MySQL", "Docker"],
    img: imgTravel,
  },
];

export interface SkillGroup {
  index: string;
  title: string;
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Leadership & Soft Skills",
    note: "the people side",
    items: [
      "Team Leadership",
      "Agile Development Management",
      "Mentoring",
      "Cross-functional Collaboration",
      "Time Management",
      "Project Planning",
    ],
  },
  {
    index: "02",
    title: "Core Technical",
    note: "the stack I ship with",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "AngularJS",
      "Vue.js",
      "Flutter",
      "WordPress",
      "Node.js",
      "Python",
      "MySQL",
      "REST APIs",
      "Git / GitLab CI-CD",
    ],
  },
  {
    index: "03",
    title: "Tools & Platforms",
    note: "daily drivers",
    items: [
      "Figma",
      "Jira",
      "GitLab",
      "Postman",
      "VS Code",
      "Docker",
      "Nginx",
      "Webflow",
      "Trello",
      "SEO",
    ],
  },
  {
    index: "04",
    title: "Specialized",
    note: "breadth of craft",
    items: [
      "UI/UX Design",
      "Graphic Design",
      "Email Marketing",
      "Canva Pro",
      "ESP Management",
      "Mobile App Development",
    ],
  },
];

export const previousEducation = {
  degree: "+2 / Higher Secondary Education",
  school: "Nightingle",
  dates: "Previous Education",
  results: "Completed",
};

export const education = {
  degree: "BSc (Hons) Computer Science & Software Engineering",
  school: "University of Bedfordshire",
  dates: "2021 — 2025",
  location: "United Kingdom",
  courses: [
    "React.js",
    "Python",
    "Java",
    "JavaScript",
    "MySQL",
    "Software Engineering",
    "Web Development",
    "Database Systems",
  ],
  gpa: "Completed",
};

export const certifications = [
  {
    name: "Frontend Web Development",
    issuer: "Web Development",
    color: "acid",
  },
  {
    name: "React.js & TypeScript",
    issuer: "Technical Skills",
    color: "amber",
  },
  {
    name: "Email Marketing & Deliverability",
    issuer: "Professional",
    color: "fog",
  },
];

export const interests = [
  "Web Development",
  "UI/UX Design",
  "Email Marketing",
  "Cloud & Automation",
  "Artificial Intelligence",
  "Mobile App Development",
];

export const techTicker = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "AngularJS",
  "Vue.js",
  "Flutter",
  "WordPress",
  "Python",
  "MySQL",
  "Git / GitLab CI-CD",
  "Jira",
  "Figma",
  "Docker",
  "Nginx",
  "REST APIs",
  "SEO",
  "Postman",
  "Redux",
];
