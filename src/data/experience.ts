/**
 * EXPERIENCE — timeline of real, current activities. Nothing invented.
 */

export type Experience = {
  period: string;
  title: string;
  org: string;
  points: string[];
  tech: string[];
  outcome: string;
  color: "yellow" | "purple" | "pink" | "green" | "paper";
};

export const experiences: Experience[] = [
  {
    period: "2026 — ONGOING",
    title: "GOOGLE GEMINI STUDENT AMBASSADOR",
    org: "Google",
    points: [
      "Selected as a Gemini Student Ambassador ('26 cohort) — currently serving",
      "Running AI/Gemini learning sessions and community activities on campus",
      "Building applied demos with Gemini to make AI tangible for peers",
    ],
    tech: ["AI", "Gemini", "Community", "Public Speaking"],
    outcome: "Building AI awareness and hands-on skills across the student community",
    color: "yellow",
  },
  {
    period: "2026 — ONGOING",
    title: "INDEPENDENT PRODUCT BUILDER",
    org: "Self-directed",
    points: [
      "Shipped KisanKart — agri marketplace with AI demand forecasting (live)",
      "Shipped Atmosyn — atmospheric/weather data platform (live)",
      "Building Autoploy — AI-powered deployment service (main active project)",
      "Developing WeatherGPT — conversational weather intelligence",
    ],
    tech: ["TypeScript", "Python", "AI/ML", "Full Stack", "DevOps"],
    outcome: "4 products in active development — 2 live, 2 under construction",
    color: "green",
  },
  {
    period: "2025 — 2026",
    title: "FIRST YEAR · DEPARTMENT RANK 1",
    org: "Engineering / IT Department",
    points: [
      "Sem 1 SGPA 8.47 · Sem 2 SGPA 8.95 → Year-1 CGPA 8.71/10",
      "Ranked 1st in the department while building products on the side",
      "Core focus: DSA, OOP, DBMS and mathematics foundations",
    ],
    tech: ["C++", "DSA", "DBMS", "Mathematics"],
    outcome: "Academic rank 1 with zero compromise on building",
    color: "purple",
  },
];
