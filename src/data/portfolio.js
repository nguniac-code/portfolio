// Edit this file to update your portfolio. Components read everything from here.

export const person = {
  name: "Ngunia Ceesay",
  initials: "NC",
  titleLines: ["Customer Service Supervisor", "B.Tech CSE Student"],
  intro:
    "Critical thinker, problem solver, and technology enthusiast passionate about learning, building useful solutions, and helping people.",
  location: "The Gambia, West Africa",
  email: "nguniac@gmail.com",
  github: "https://github.com/nguniac-code",
  linkedin: "https://www.linkedin.com/in/ngunia-ceesay-708187337",
  profileImage: "/profile.jpg", // put your photo at public/profile.jpg
  resume: "/resume.pdf", // put your resume at public/resume.pdf
};

export const about = [
  "I'm Ngunia Ceesay from The Gambia, West Africa, currently pursuing a B.Tech in Computer Science and Engineering at Rayat Bahra University.",
  "I'm passionate about learning new technologies, solving problems, and helping people. I'm a critical thinker who enjoys taking on new challenges and keeps developing my skills.",
];

// icon must match a key in the iconMap in src/components/Skills.jsx
export const skills = [
  { name: "Java", icon: "coffee" },
  { name: "Python", icon: "terminal" },
  { name: "HTML", icon: "code" },
  { name: "Networking", icon: "network" },
  { name: "Problem Solving", icon: "puzzle" },
  { name: "Critical Thinking", icon: "brain" },
  { name: "Customer Service", icon: "headset" },
];

// Set repo / demo to a real URL when ready. Leave as null to show "Coming Soon".
export const projects = [
  {
    name: "Autolite",
    description: "A student software project. Add a one or two sentence summary of what Autolite does.",
    tech: [],
    status: "In progress",
    repo: null,
    demo: null,
  },
  {
    name: "NAWEC Meter Data Management",
    description:
      "A student project concept exploring how utility meter data can be recorded, organised, and managed.",
    tech: [],
    status: "Concept",
    repo: null,
    demo: null,
  },
  {
    name: "ShopLite",
    description: "A student software project. Add a one or two sentence summary of what ShopLite does.",
    tech: [],
    status: "In progress",
    repo: null,
    demo: null,
  },
];

export const education = [
  {
    school: "Rayat Bahra University",
    degree: "B.Tech in Computer Science and Engineering",
    detail: "Currently in the 5th semester",
  },
];

export const experience = [
  {
    role: "Customer Service Supervisor",
    organization: "", // optional: add your employer
    period: "", // optional: e.g. "2022 to present"
    summary:
      "Working in customer service and supporting people, bringing critical thinking and problem solving to everyday challenges.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
