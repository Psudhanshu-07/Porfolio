/**
 * ABOUT — structured, no generic clichés. Edit freely.
 */

export type AboutBlock = {
  label: string;
  title: string;
  color: "purple" | "yellow" | "pink" | "green" | "paper";
  body: string;
  chips?: string[];
};

export const aboutBlocks: AboutBlock[] = [
  {
    label: "WHO I AM",
    title: "builder first, student second",
    color: "purple",
    body: "An engineering student focused on becoming a strong software engineer by building practical systems instead of only learning theory. I treat every project as training for real production work.",
  },
  {
    label: "WHAT I BUILD",
    title: "products, not assignments",
    color: "yellow",
    body: "I take ideas from a blank folder to a deployed product — with the boring parts (data, config, deployment) treated as part of the craft.",
    chips: [
      "AI-powered applications",
      "Cloud systems",
      "Automation tools",
      "Full-stack products",
      "Developer tools",
    ],
  },
  {
    label: "WHAT I'M LEARNING",
    title: "depth over buzzwords",
    color: "green",
    body: "A deliberate stack: fundamentals for the long game, and modern tooling for the current one.",
    chips: [
      "C++",
      "DSA",
      "System Design",
      "Cloud",
      "DevOps",
      "AI/ML",
      "Distributed Systems",
      "Cybersecurity fundamentals",
    ],
  },
  {
    label: "WHAT I CARE ABOUT",
    title: "software that survives contact with reality",
    color: "pink",
    body: "Reliable software, useful products, scalable systems, and solving real problems — not resume-driven engineering.",
  },
];
