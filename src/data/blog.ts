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
  content?: BlogBlock[]; // full article — required for published posts
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rank-1-first-year",
    title: "Rank 1 in my department — first year academics",
    category: "ACADEMICS",
    date: "2026-09-30",
    readTime: "4 min read",
    excerpt:
      "Sem 1 SGPA 8.47 · Sem 2 SGPA 8.95 → first-year CGPA 8.71/10. How consistent fundamentals, honest self-review and steady execution made me Department Rank 1.",
    color: "yellow",
    draft: false,
    highlight: "RANK 1",
    content: [
      {
        type: "p",
        text: "I finished my first year of engineering as Department Rank 1 with a CGPA of 8.71/10 — Sem 1 at 8.47 and a strong Sem 2 finish at 8.95. This post is the honest version of how that happened, because the internet has enough fake study-guru content already.",
      },
      { type: "h2", text: "The numbers" },
      {
        type: "list",
        items: [
          "Semester 1 — SGPA 8.47/10",
          "Semester 2 — SGPA 8.95/10 (a 0.48 jump)",
          "Year 1 CGPA — 8.71/10",
          "Department Rank — 1",
        ],
      },
      { type: "h2", text: "What actually worked" },
      {
        type: "p",
        text: "The jump from 8.47 to 8.95 wasn't luck — Sem 1 was spent learning HOW to study engineering subjects while also learning the subjects themselves. By Sem 2 the process was tuned. Three things carried it:",
      },
      {
        type: "list",
        items: [
          "Fundamentals first. I refused to memorise what I could derive. In DSA, OOP and DBMS, understanding the 'why' made the 'what' free.",
          "Consistency over cramming. Fixed weekly review hours beat all-nighters every single time. Exam week was boring on purpose.",
          "Honest self-review. After every test I wrote down exactly where I lost marks — concept gaps vs. silly mistakes. Fixing the right thing is half the game.",
        ],
      },
      {
        type: "quote",
        text: "Rank 1 wasn't the goal. Understanding everything well enough to build with it was — the rank was a side effect.",
      },
      { type: "h2", text: "Building while studying" },
      {
        type: "p",
        text: "I shipped KisanKart and Atmosyn during this same period, and people ask if academics suffered. The opposite happened. Building products made course material concrete — DBMS schemas stopped being abstract the day I designed my own tables, and forecasting made statistics feel alive.",
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "Year 2 target: keep the rank while going deeper into DSA, system design and AI/ML. The bar I care about is simple — could I explain and use everything I've scored marks on? If yes, the CGPA takes care of itself.",
      },
    ],
  },
  {
    slug: "google-gemini-student-ambassador",
    title: "What I'm learning as a Google Gemini Student Ambassador",
    category: "AI",
    date: "2026-09-30",
    readTime: "6 min read",
    excerpt:
      "A first-person look at helping students explore Gemini and applied AI, making technical ideas approachable, and building a campus community around learning by doing.",
    color: "purple",
    draft: false,
    highlight: "GOOGLE GSA '26",
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
  {
    slug: "lessons-kisankart",
    title: "Lessons from building KisanKart",
    category: "PROJECTS",
    date: "2026-09-22",
    readTime: "4 min read",
    excerpt:
      "What building a farm-to-buyer marketplace taught me about product thinking, AI forecasting and designing for trust.",
    color: "pink",
    draft: true,
  },
  {
    slug: "deploying-full-stack",
    title: "Deploying a full-stack application",
    category: "DEVOPS",
    date: "2026-09-22",
    readTime: "5 min read",
    excerpt:
      "From localhost to a deployed URL — the pipeline, the config, the mistakes. Written while shipping KisanKart and Atmosyn.",
    color: "green",
    draft: true,
  },
  {
    slug: "autoploy-diary",
    title: "Building Autoploy — an AI deployment service",
    category: "DEVOPS",
    date: "2026-09-24",
    readTime: "5 min read",
    excerpt:
      "My main active project: teaching software to deploy itself. Design notes from building AI-powered deployment automation.",
    color: "paper",
    draft: true,
  },
];
