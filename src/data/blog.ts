/**
 * BLOG — data-driven. Published posts have full `content` rendered at /blog/[slug].
 * Drafts show "coming soon" and are not clickable.
 * Edit content blocks freely — they are the single source for detail pages.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: "ACADEMICS" | "AI" | "CLOUD" | "DEVOPS" | "PROJECTS" | "LEARNING";
  date: string;
  readTime: string;
  excerpt: string;
  color: "yellow" | "purple" | "pink" | "green" | "paper";
  draft: boolean;
  highlight?: string;
  externalUrl?: string;
  content?: BlogBlock[]; // full article — required for published posts
};

export const blogPosts: BlogPost[] = [
  {
    slug: "google-gemini-student-ambassador",
    title: "From Applying to Representing Google: My Google Student Ambassador 2026 Journey",
    category: "AI",
    date: "2026-09-30",
    readTime: "Read on Medium",
    excerpt:
      "How I applied, earned the opportunity and began my journey as a Google Student Ambassador in 2026.",
    color: "purple",
    draft: false,
    highlight: "GOOGLE GSA '26",
    externalUrl:
      "https://medium.com/@pandeysudhanshu979/from-applying-to-representing-google-my-google-student-ambassador-2026-journey-428121fd906f",
    content: [
      {
        type: "p",
        text: "I'm serving in the 2026 Google Gemini Student Ambassador cohort. The part of the role I care about most is helping make AI approachable: not treating it as a distant research topic or a collection of impressive demos, but as a set of tools students can learn, question and apply responsibly. This is a work-in-progress reflection on what that responsibility looks like on campus.",
      },
      { type: "h2", text: "The title is the smallest part" },
      {
        type: "p",
        text: "An ambassador role can look like a line on a profile. The useful work happens beyond that line: creating opportunities for peers to explore the technology, making room for beginner questions, and connecting curiosity with hands-on practice. A session is valuable when someone leaves with a clearer mental model and a next step they can try for themselves.",
      },
      { type: "h2", text: "Start with a problem, not a product tour" },
      {
        type: "p",
        text: "When introducing an AI tool, it is tempting to begin with a list of features. I find it more useful to begin with a familiar task: organizing ideas, understanding a difficult concept, or building a small prototype. The tool then has a reason to be in the room. Students can compare the result with what they expected, notice where it helps, and identify where it needs human judgment.",
      },
      {
        type: "list",
        items: [
          "Explain the task before showing the tool, so the demo has a clear purpose.",
          "Make the process visible: inputs, assumptions and revisions matter as much as the final answer.",
          "Leave time for people to try it themselves and ask questions in their own words.",
          "Be candid about mistakes, uncertainty and the need to verify important outputs.",
        ],
      },
      {
        type: "quote",
        text: "A good AI session should leave people more capable of judging an answer, not just more impressed by one.",
      },
      { type: "h2", text: "What campus community-building asks of you" },
      {
        type: "p",
        text: "Students arrive with very different backgrounds. Some have already built with APIs; others are meeting the vocabulary for the first time. That changes how I think about explaining technical ideas. Clear language is not a watered-down version of the subject. It is a way to give more people a fair entry point, then offer enough depth for those ready to go further.",
      },
      {
        type: "p",
        text: "It also means listening. The questions people ask reveal what is confusing, what feels relevant and what a workshop should cover next. A community is not built by one person speaking at the front; it grows when participants can share what they tried and help one another continue after the event.",
      },
      { type: "h2", text: "The connection to building products" },
      {
        type: "p",
        text: "Working on products such as KisanKart and Atmosyn has taught me to look past the novelty of a technology and ask what problem it is meant to solve. That same question belongs in an AI workshop. A model or prompt is only one part of a useful system; the surrounding context, data, interface and verification process matter too.",
      },
      {
        type: "p",
        text: "The ambassador experience gives me another reason to practice explaining those tradeoffs. If I cannot describe what a tool is doing, where it can fail, and why it helps in a particular situation, I probably have more learning to do before recommending it to someone else.",
      },
      { type: "h2", text: "What I want to keep building" },
      {
        type: "p",
        text: "For the rest of the cohort, I want to keep creating practical ways for students to learn Gemini and applied AI together: sessions with time to experiment, demos tied to real tasks, and notes that make it easier for someone else to pick up the work. I also want to keep asking whether each activity gives students something they can use after the event is over.",
      },
      {
        type: "p",
        text: "I'm still learning what works. That is part of the point. The strongest outcome would not be that people remember a title or a single workshop; it would be that more students feel equipped to explore AI carefully, build something useful, and share what they learn with the next person.",
      },
    ],
  },
];
