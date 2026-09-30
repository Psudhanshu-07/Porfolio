/**
 * PROFILE — single source of truth for personal information.
 * Every value here is a PLACEHOLDER until you confirm it.
 * See PORTFOLIO_CONTENT_REQUIRED.md for the full checklist.
 */
export const profile = {
  name: {
    first: "SUDHANSHU",
    last: "PANDEY",
    display: "Sudhanshu Pandey",
  },
  role: "SOFTWARE_ENGINEER()",
  tagline: "Software Engineer • AI • Cloud • DevOps • Full Stack",
  location: "Mumbai, India", // TODO: verify
  status: "Engineering / IT Student",
  focus: "AI • CLOUD • DEVOPS",
  mission: "Build. Solve. Deploy.",
  availability: "Open to opportunities / collaborations",
  photo: "/profile-photo.jpeg",
  resume: "/resume.pdf", // TODO: add public/resume.pdf
  domain: "sudhanshu.dev",
} as const;

// Canonical socials live in ./socials.ts — re-exported here for convenience
export { socials } from "./socials";

export const heroIntro = {
  greeting: "Hi, I'm Sudhanshu.",
  lines: [
    "I build software products at the intersection of AI, cloud, automation and modern software engineering.",
    "I enjoy turning real-world problems into working products — from idea, to prototype, to something people actually use.",
  ],
  highlights: [
    { text: "SOFTWARE ENGINEER", bg: "purple" },
    { text: "AI BUILDER", bg: "pink" },
    { text: "CLOUD ENTHUSIAST", bg: "green" },
    { text: "PRODUCT BUILDER", bg: "paper" },
  ],
  statusCard: "🚀 Open to opportunities / collaborations",
} as const;

export const philosophy = [
  { step: "BUILD", note: "ship real software" },
  { step: "SOLVE", note: "real problems" },
  { step: "DEPLOY", note: "to real environments" },
  { step: "LEARN", note: "from what breaks" },
] as const;
