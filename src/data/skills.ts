/**
 * SKILLS — proficiency shown honestly via levels, never fake percentages.
 */

export type SkillLevel = "LEARNING" | "WORKING" | "BUILDING" | "EXPLORING";

export type SkillGroup = {
  title: string;
  accent: "purple" | "yellow" | "pink" | "green" | "paper";
  blurb: string;
  skills: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "LANGUAGES",
    accent: "purple",
    blurb: "core syntax I think in",
    skills: [
      { name: "C++", level: "WORKING" },
      { name: "Python", level: "BUILDING" },
      { name: "Java", level: "LEARNING" },
      { name: "SQL", level: "LEARNING" },
    ],
  },
  {
    title: "DEVELOPMENT",
    accent: "yellow",
    blurb: "how products get made",
    skills: [
      { name: "Full Stack", level: "BUILDING" },
      { name: "APIs", level: "BUILDING" },
      { name: "Backend Development", level: "BUILDING" },
      { name: "Frontend Development", level: "BUILDING" },
    ],
  },
  {
    title: "AI / DATA",
    accent: "pink",
    blurb: "applied intelligence",
    skills: [
      { name: "AI/ML", level: "BUILDING" },
      { name: "LLM Applications", level: "BUILDING" },
      { name: "Forecasting", level: "BUILDING" },
      { name: "Automation", level: "BUILDING" },
    ],
  },
  {
    title: "CLOUD / DEVOPS",
    accent: "green",
    blurb: "how software runs",
    skills: [
      { name: "Git", level: "WORKING" },
      { name: "Linux", level: "WORKING" },
      { name: "Docker", level: "LEARNING" },
      { name: "Kubernetes", level: "LEARNING" },
      { name: "Cloud", level: "LEARNING" },
      { name: "CI/CD", level: "LEARNING" },
    ],
  },
  {
    title: "FOUNDATIONS",
    accent: "paper",
    blurb: "the deep fundamentals",
    skills: [
      { name: "DSA", level: "BUILDING" },
      { name: "Networking", level: "LEARNING" },
      { name: "System Design", level: "LEARNING" },
      { name: "Cybersecurity Fundamentals", level: "EXPLORING" },
    ],
  },
];

export type TechSticker = {
  name: string;
  color: "purple" | "yellow" | "pink" | "green" | "blue" | "paper";
  note: string;
};

export const techWall: TechSticker[] = [
  { name: "C++", color: "blue", note: "DSA & systems programming" },
  { name: "PYTHON", color: "yellow", note: "AI/ML, scripting, backends" },
  { name: "JAVA", color: "purple", note: "OOP & coursework" },
  { name: "SQL", color: "pink", note: "relational data modelling" },
  { name: "GIT", color: "green", note: "version control discipline" },
  { name: "LINUX", color: "paper", note: "daily driver environment" },
  { name: "DOCKER", color: "blue", note: "containerising services" },
  { name: "KUBERNETES", color: "purple", note: "orchestration, learning" },
  { name: "CLOUD", color: "yellow", note: "deployment & services" },
  { name: "AI/ML", color: "pink", note: "models in production paths" },
  { name: "LLMs", color: "green", note: "applied language interfaces" },
  { name: "CI/CD", color: "paper", note: "pipeline thinking" },
];
