/**
 * EDUCATION, CERTIFICATIONS, ACHIEVEMENTS.
 * Academic numbers verified by Sudhanshu (Oct 2026).
 * Institution details still TODO — marked clearly.
 */

export type Education = {
  degree: string;
  institution: string; // TODO
  university: string; // TODO
  period: string;
  performance: string;
  relevant: string[];
  status: string;
  color: "purple" | "yellow" | "pink" | "green";
};

export const education: Education[] = [
  {
    degree: "B.Tech — Engineering / IT (branch name TBD)", // TODO: exact branch
    institution: "TODO: College name", // TODO
    university: "TODO: Affiliating university", // TODO
    period: "2025 — 2029", // TODO: verify years
    performance: "CGPA 8.71/10 (Year 1) · Department Rank 1",
    relevant: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Software Engineering",
    ],
    status: "IN PROGRESS",
    color: "purple",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId: string | null;
  verifyUrl: string | null;
  color: "yellow" | "purple" | "pink" | "green";
  active?: boolean; // currently serving
};

export const certifications: Certification[] = [
  {
    name: "Google Gemini Student Ambassador",
    issuer: "Google",
    date: "2026 — ongoing",
    credentialId: null, // add credential link when available
    verifyUrl: null,
    color: "yellow",
    active: true,
  },
  {
    name: "TODO: Certification name",
    issuer: "TODO: Issuer",
    date: "TODO: Month Year",
    credentialId: null,
    verifyUrl: null,
    color: "green",
  },
];

export type Achievement = {
  group: "RECOGNITION" | "VOLUNTEERING";
  title: string;
  detail: string;
  org: string;
  date: string;
  evidence: string | null;
  tag: string;
  color: "yellow" | "purple" | "pink" | "green" | "blue";
};

export const achievements: Achievement[] = [
  {
    group: "RECOGNITION",
    title: "Department Rank 1 — First Year",
    detail:
      "Ranked 1st in the department after first year: Sem 1 SGPA 8.47, Sem 2 SGPA 8.95, CGPA 8.71/10.",
    org: "Department of Engineering / IT", // TODO: exact department name
    date: "2026",
    evidence: null, // add proof link when available
    tag: "ACADEMIC",
    color: "yellow",
  },
  {
    group: "VOLUNTEERING",
    title: "Google Gemini Student Ambassador",
    detail:
      "Selected as a Google Gemini Student Ambassador ('26). Currently serving — AI sessions, community building and applied Gemini work on campus.",
    org: "Google",
    date: "2026 — ongoing",
    evidence: null,
    tag: "COMMUNITY",
    color: "purple",
  },
  {
    group: "VOLUNTEERING",
    title: "National Service Scheme (NSS)",
    detail:
      "Volunteering through NSS and contributing to community-focused service activities.",
    org: "National Service Scheme",
    date: "Ongoing",
    evidence: null,
    tag: "VOLUNTEERING",
    color: "green",
  },
];
