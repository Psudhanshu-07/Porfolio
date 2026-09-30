/**
 * PROJECTS — from verified public GitHub repos (Oct 1, 2026) + user-confirmed statuses.
 * Presented as products with case-study structure. Nothing invented.
 */

export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  categories: string[];
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  status: "LIVE" | "BUILDING" | "PLANNED";
  color: "yellow" | "purple" | "pink" | "green" | "paper";
  image: string;
  github: string; // real repo URL
  demo: string | null; // real deployed URL or null
  caseStudy?: {
    whyItMatters: string;
    architecture: string[];
    challenges: string[];
    learned: string[];
    future: string[];
  };
};

export const projects: Project[] = [
  {
    id: "kisankart",
    number: "01",
    name: "KisanKart",
    tagline:
      "Digital agricultural marketplace connecting farmers, FPOs, consumers and bulk buyers.",
    categories: ["FULL-STACK", "AGRITECH", "AI FORECASTING"],
    problem:
      "Farmers and FPOs depend on layers of intermediaries that reduce their share of the final price, while buyers lack direct access to produce sources.",
    solution:
      "A marketplace platform that enables direct produce sales, with AI-driven demand forecasting and logistics optimisation to improve pricing, distribution and supply-chain efficiency.",
    tech: ["TypeScript", "Full Stack", "AI Forecasting", "Logistics Optimisation"],
    features: [
      "Direct farm-to-buyer produce sales",
      "AI-driven demand forecasting",
      "Logistics optimisation for distribution",
      "Multi-role platform: farmers, FPOs, consumers, bulk buyers",
    ],
    status: "LIVE",
    color: "green",
    image: "/projects/kisankart.svg",
    github: "https://github.com/Psudhanshu-07/KisanKart",
    demo: "https://kisan-kart-ebon.vercel.app/",
    caseStudy: {
      whyItMatters:
        "Agri supply chains quietly absorb producer value through intermediaries. A direct platform shifts pricing power back toward farmers.",
      architecture: [
        "Listing service: crops, quantities, prices per seller role",
        "Demand forecasting layer driving pricing & stock signals",
        "Logistics optimisation module for distribution planning",
        "Buyer discovery and enquiry flow (consumers + bulk buyers)",
      ],
      challenges: [
        "Designing flows for users with very different digital literacy levels",
        "Making AI forecasts legible to non-technical users",
        "Modelling multi-role permissions (farmer / FPO / buyer)",
      ],
      learned: [
        "Product design for non-technical users is its own discipline",
        "Forecasting is only useful when it changes a decision",
        "Marketplaces live or die on trust features",
      ],
      future: [
        "Payment & logistics partner integration",
        "Multi-language UI for wider reach",
        "Seller verification to strengthen trust",
      ],
    },
  },
  {
    id: "atmosyn",
    number: "02",
    name: "Atmosyn",
    tagline: "Atmospheric data platform — weather intelligence, deployed.",
    categories: ["AI", "WEATHER", "DATA PLATFORM"],
    problem:
      "Weather data is abundant but decision-grade insight is scarce — raw forecasts don't tell you when to trust them.",
    solution:
      "An atmospheric data platform (Python) that analyses weather information and serves it through a deployed web interface. This continues the forecast-reliability direction of BUSTRA.",
    tech: ["Python", "Weather Data", "AI/ML", "Deployed Web Service"],
    features: [
      "Weather data analysis pipeline",
      "Deployed public web interface",
      "Forecast-reliability oriented analysis",
    ],
    status: "LIVE",
    color: "yellow",
    image: "/projects/bustra.svg",
    github: "https://github.com/Psudhanshu-07/Atmosyn",
    demo: "https://atmosyn-eosin.vercel.app",
    caseStudy: {
      whyItMatters:
        "People make real decisions from weather — travel, farming, events. Knowing when a forecast deserves trust is as valuable as the forecast itself.",
      architecture: [
        "Data ingestion of forecast & observed weather data",
        "Analysis layer comparing forecast vs. actual behaviour",
        "Served via a deployed web application",
      ],
      challenges: [
        "Normalising heterogeneous weather data sources",
        "Keeping analysis honest rather than decorative",
      ],
      learned: [
        "Applied ML is mostly data plumbing and evaluation design",
        "Probabilistic thinking beats single-number accuracy",
      ],
      future: [
        "Longer historical window for reliability scoring",
        "Region-level dashboards",
        "Public API for reliability signals",
      ],
    },
  },
  {
    id: "autoploy",
    number: "03",
    name: "Autoploy",
    tagline: "AI-powered deployment service — the main project in the forge.",
    categories: ["DEVOPS", "AI", "CI/CD"],
    problem:
      "Repeatable deployments are easy to describe but tedious to do consistently; small teams lose time to manual release drudgery.",
    solution:
      "An AI-powered deployment service that turns build → deploy workflows into repeatable, intelligent pipelines.",
    tech: ["AI", "DevOps", "CI/CD", "Automation"],
    features: [
      "AI-assisted deployment configuration",
      "Repeatable pipeline definitions",
      "Rollback thinking built in",
    ],
    status: "BUILDING",
    color: "purple",
    image: "/projects/autoploy.svg",
    github: "https://github.com/Psudhanshu-07/AUTOPLOY",
    demo: null,
    caseStudy: {
      whyItMatters:
        "Every manual deploy step is a future 2am incident. Automating them early builds good habits into a project's DNA.",
      architecture: [
        "Pipeline definition layer per environment",
        "AI assistance for config & error interpretation",
        "Deployment targets with health checks",
      ],
      challenges: [
        "Flexible automation without becoming a config swamp",
        "Safe rollback semantics",
      ],
      learned: [
        "Automation is documentation that executes",
        "Idempotency is the core property of good deploy scripts",
      ],
      future: [
        "Docker-based runners",
        "GitHub Actions integration",
        "Status dashboard",
      ],
    },
  },
  {
    id: "weathergpt",
    number: "04",
    name: "WeatherGPT",
    tagline: "Conversational weather intelligence interface.",
    categories: ["AI", "LLM", "WEATHER"],
    problem:
      "Weather apps answer 'what is the temperature' but not 'should I actually carry an umbrella today'.",
    solution:
      "A chat-style interface that turns raw weather data into plain-language, decision-ready answers.",
    tech: ["Python", "LLM APIs", "Weather API", "Prompt Design"],
    features: [
      "Natural-language weather queries",
      "Decision-oriented summaries",
      "Location-aware responses",
    ],
    status: "BUILDING",
    color: "pink",
    image: "/projects/weathergpt.svg",
    github: "https://github.com/Psudhanshu-07/WeatherGPT",
    demo: null,
  },
];

export const projectCategories = [
  "ALL",
  ...Array.from(new Set(projects.flatMap((p) => p.categories))),
];
