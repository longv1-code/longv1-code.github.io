/**
 * projects.js
 * Add, remove, or edit your projects here.
 * Each project renders a carousel card on the homepage
 * and a full case-study page at /project/:id
 *
 * Fields:
 *   id          – unique number, used in the URL  (/project/1)
 *   title       – project name
 *   year        – string, e.g. "2024"
 *   month       – string, e.g. "March"
 *   summary     – one-line description (shown on card + case-study)
 *   tags        – short labels shown on the card (2–4 recommended)
 *   featured    – show on homepage carousel when true
 *   image       – hero / card image URL
 *   role        – your role on the project
 *   duration    – time spent, e.g. "3 months"
 *   tech        – full stack list shown in the TL;DR strip
 *   liveUrl     – link to live demo  (use "#" if none)
 *   repoUrl     – link to source code (use "#" if none)
 *   problem     – paragraph: why did this project exist?
 *   built       – array of { heading, body, image } — the interesting technical sections
 *   learned     – paragraph: honest reflection on what you learned
 */

import daring_dungoner from '../assets/images/daring_dungoner.png';
import gradprix from '../assets/images/gradprix.png';
import slanntea from '../assets/images/slanntea.png';
import anivibe from '../assets/images/anivibe.png';
import placeholder from '../assets/images/project-placeholder.jpg'

const MONTH_INDEX = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

const getMonthIndex = (month) => {
  if (!month) return 0;
  const key = String(month).trim().toLowerCase();
  return MONTH_INDEX[key] || 0;
};

export const sortProjectsByDate = (projects) =>
  [...projects].sort((a, b) => {
    const yearA = Number(a.year) || 0;
    const yearB = Number(b.year) || 0;
    if (yearA !== yearB) return yearB - yearA;

    const monthA = getMonthIndex(a.month);
    const monthB = getMonthIndex(b.month);
    return monthB - monthA;
  });

export const PROJECTS = [
  {
    id: 1,
    title: "Debt Dungeon",
    featured: true,
    year: "2026",
    month: "June",
    summary:
      "A debt payoff tracker that turns each debt into a boss fight — every payment deals damage, and unpaid interest keeps the boss regenerating health.",
    tags: ["Full-Stack", "Solo Project", "TypeScript", "PostgreSQL"],
    image: placeholder,
    role: "Solo Developer",
    duration: "Ongoing — in development",
    tech: ["React", "Vite", "Express", "PostgreSQL", "Prisma", "Zustand", "Clerk", "Stripe"],
    liveUrl: "#",
    repoUrl: "https://github.com/longv1-code/debt-dungeon",
    problem:
      "Paying off debt is mostly invisible progress — you make a payment, a number goes down, and that's it. There's no sense of momentum. I wanted to build a tracker where progress actually feels like progress: log a payment, watch a boss take damage, and see the fight you're actually in instead of a spreadsheet row.",
    built: [
      {
        heading: "Payments that deal damage, interest that heals the boss",
        body: "Each debt is modeled as a boss with the loan's balance as its HP. Logging a payment runs a single transaction: it creates a Payment record, recalculates the debt's currentBalance, and returns whether the boss was defeated. The harder design problem was interest — debt isn't static, so a monthly interest service recalculates accrued interest using the standard amortization formula and adds it back to the balance, which is the boss regenerating HP if you're not paying enough to outpace it. That mechanic only works if the math is actually correct, so I had to get comfortable with amortization formulas I'd only seen in a finance class before.",
      },
      {
        heading: "First real schema, first real migration headaches",
        body: "This was my first project using Prisma in production rather than a tutorial. I hit breaking changes between Prisma versions partway through and had to migrate the schema and generator config without breaking existing data — a good forcing function for actually understanding what Prisma generates versus what I was assuming it generates. The schema itself is small and deliberate: Users, Debts, and Payments, with cascading deletes so removing a debt cleanly removes its payment history.",
      },
      {
        heading: "Hand-built pixel UI, no component library",
        body: "I built the design system from scratch with CSS Modules and a custom token file instead of pulling in Tailwind or a UI kit — I wanted full control over how the game felt, not just how it looked. Getting boss sprite sheets to animate correctly (idle, hit, attack, death states, each a different frame count) and stay pixel-aligned across screen sizes took more trial and error than I expected. It's the kind of detail that's invisible when done right and immediately obvious when it's off by a few pixels.",
      },
    ],
    learned:
      "I'm currently migrating auth from a custom JWT system to Clerk and adding Stripe for paid tiers — the schema is migrated but the auth page rewrite is still in progress. The honest current limitation: debts are entered manually rather than pulled from Plaid, because reflecting a real payment as 'damage' against live bank data raises questions I haven't fully solved yet (how do you handle a missed payment, a partial payment, or interest that accrues between bank syncs, without the game logic lying to the user). Manual entry was the right call for a v1; real account syncing is a real v2 problem I'd want to design carefully, not bolt on.",
  },
  {
    id: 2,
    title: "SLANNtea",
    featured: true,
    year: "2026",
    month: "March",
    summary:
      "The capstone project for my Introduction to Software Engineering course — a POS system for a boba shop, built in real sprints with a 5-person team. I owned the PostgreSQL schema and the order/inventory API.",
    tags: ["Full-Stack", "Team Project", "Scrum", "PostgreSQL"],
    image: slanntea,
    role: "Backend Engineer",
    duration: "2 months",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Passport.js", "ChatGPT API", "Vercel", "Render"],
    liveUrl: "https://team31-project-3.vercel.app/",
    repoUrl: "https://github.com/CSCE-331-Spring-2026-900-908/team31-project-3",
    problem:
      "This was the final project for my Introduction to Software Engineering course, after a semester spent actually learning the discipline behind building software, not just the code — UI/UX principles like the Norman door (why a design should make its own use obvious without instructions), and how Scrum actually runs day to day. The project itself: every team was assigned to design and build a full POS system for a boba tea shop. Before writing any code, our professor had us go observe one — watch how employees took orders, then go order a combo meal at a kiosk somewhere else and count how many taps it took to get from start to checkout. That research shaped the whole system: we ended up with four distinct interfaces (a static menu board with allergy info, an employee ordering POS, a manager view layered on top with inventory and reporting, and a customer-facing kiosk) instead of one generic app, because that's what we'd actually watched real ordering systems need.",
    built: [
      {
        heading: "Running it like a real Scrum team, not a group project",
        body: "We ran the project as actual sprints: at least three stand-up style check-ins a week, tasks tracked as issues in Jira with owners and status, and burndown charts generated from that data to show contribution and progress over time. It was the first time I'd used a sprint cadence and an issue tracker for something other than a tutorial, and it changed how I scoped my own work — breaking the database and API layer into small enough tickets that I could actually show progress at every check-in instead of disappearing for a week and resurfacing with a wall of code.",
      },
      {
        heading: "The database and the schema everything else depends on",
        body: "I set up the PostgreSQL schema — products, modifiers, inventory, ingredients, orders and order details, plus a rewards table tied to customer email for the points system — and the relationships between them. Inventory is tracked at the ingredient level, so an order can't be placed if it would use more of an item than is currently in stock; that check lives in the database layer, not scattered across the frontend.",
      },
      {
        heading: "RESTful order routes and session-based auth from scratch",
        body: "I built the order and product API routes shared by both the employee POS and the customer kiosk: creating an order, adding line items with their selected modifiers, and recalculating subtotal, tax, and total server-side any time the order changes. I also set up session-based authentication with Passport.js, backed by PostgreSQL sessions, so the POS and kiosk could each maintain their own login state without duplicating auth logic. The goal throughout was a clean REST contract where the frontend's job is just to call an endpoint and render what comes back — no duplicating pricing or tax logic on the client, no guessing at what state the order is in.",
      },
      {
        heading: "The system my API had to support",
        body: "Teammates built the rest of the kiosk on top of those endpoints: a ChatGPT-powered chatbot for customer questions, accessibility features like high-contrast mode, larger tap targets, text-to-speech, and live translation, a weather-aware drink recommender (checking current temperature against each drink's hot/cold label), and an email-based rewards system. None of that was my code, but designing the order API meant thinking through what each of those features would need to call — which is its own kind of design constraint.",
      },
    ],
    learned:
      "Owning the database and API layer on a 5-person team taught me how much an API contract matters once other people are actually depending on it — the kiosk frontend, the chatbot, and the manager reporting view all called into endpoints I owned, so an ambiguous response shape or an unhandled edge case became someone else's bug, not just mine. The course readings on commenting and coding conventions weren't just busywork either — once code review was a regular part of the workflow, writing for a reader other than myself stopped being optional.",
  },
  {
    id: 3,
    title: "AniVibe",
    featured: true,
    year: "2026",
    month: "May",
    summary:
      "An anime recommender that takes a plain-English description of a vibe or plot and turns it into a precise database query over a 20,000+ title dataset.",
    tags: ["AI/LLM", "Full-Stack", "Solo Project", "Semantic Search"],
    image: anivibe,
    role: "Solo Developer",
    duration: "2 weeks",
    tech: ["React", "Vite", "Python", "FastAPI", "PostgreSQL", "Gemini API", "Supabase", "Jikan API"],
    liveUrl: "https://anivibe-neon.vercel.app/",
    repoUrl: "https://github.com/longv1-code/anivibe",
    problem:
      "I noticed a lot of job postings asking for Python specifically, and backend work was genuinely my weaker side compared to frontend, so I wanted a project that would force me to get better at it rather than lean on what I already knew. I picked anime recommendations because I actually like the genre, and because most anime apps only filter by genre and score — a request like 'a dark psychological anime from the 2010s with a strong female lead' doesn't really work as a search there. I wanted to see if I could translate a sentence like that directly into a real query instead of forcing the user into dropdowns.",
    built: [
      {
        heading: "Natural language to SQL",
        body: "User queries go through the Gemini API, which translates plain English into a structured query against a 20,000+ record anime dataset rather than a fixed set of filters. The hard part was constraining the model enough that it reliably produces valid, safe SQL shapes instead of hallucinating fields that don't exist in the schema.",
      },
      {
        heading: "A reranking pass on top of the raw query",
        body: "A direct SQL match isn't always the most relevant one — two anime can match the literal filters and still differ a lot in tone. After the initial query, a custom reranker pipeline re-scores results for relevance before they're shown, so thematically closer matches surface even when they weren't the top literal match.",
      },
      {
        heading: "Live metadata without owning the data",
        body: "Scores, episode counts, and airing status change constantly, so instead of trying to keep a local copy fresh, the Jikan API enriches each result with live MyAnimeList metadata at request time. That kept the dataset useful without me having to build and maintain a sync pipeline.",
      },
    ],
    learned:
      "This was my first time designing a multi-stage AI pipeline (parse → query → rerank → enrich) instead of a single prompt-in, answer-out call, and the biggest lesson was that each stage needs its own failure handling — a bad Gemini parse shouldn't take down the whole request, it should degrade to a simpler query. I also got a much clearer sense of where FastAPI route logic should end and a separate service layer should begin.",
  },
  {
    id: 4,
    title: "GradPrix",
    featured: false,
    year: "2025",
    month: "January",
    summary:
      "Upload your transcript and GradPrix uses AI to turn it into a personalized, step-by-step plan for what to take next toward graduation.",
    tags: ["Full-Stack", "Hackathon", "AI Integration", "Team Project"],
    image: gradprix,
    role: "Frontend Developer",
    duration: "24 hours",
    tech: ["React", "TypeScript", "Vite", "Express", "Node.js", "PostgreSQL", "Gemini API"],
    liveUrl: "https://gradprix.vercel.app/",
    repoUrl: "https://github.com/Prunuus/tamuhack26",
    problem:
      "Built at TAMUhack 2025 with two teammates. Degree requirements are scattered across advisor PDFs, degree-plan websites, and word of mouth, and it's genuinely hard to tell what you actually still need. We wanted to let a student upload their transcript and get a clear, ordered plan back instead of piecing it together themselves.",
    built: [
      {
        heading: "Owning the frontend under a 24-hour clock",
        body: "I built the React/TypeScript frontend — transcript upload, the generated plan view, and the state management connecting them to our teammates' backend — while they handled the Express/Postgres API and the Gemini integration that parses transcripts into structured requirements. With a hard 24-hour deadline, the main skill was scoping ruthlessly: deciding which UI states actually needed to be handled for a demo versus which could wait.",
      },
    ],
    learned:
      "Hackathons are a different discipline than a solo project — the bottleneck isn't usually the hard technical problem, it's how fast the team can agree on an API contract and stop blocking each other. I got faster at asking 'what shape of data do you need from me, and by when' instead of building in isolation and integrating at the end.",
  },
  {
    id: 5,
    title: "Daring Dungoner",
    featured: false,
    year: "2025",
    month: "February",
    summary:
      "A 2D dungeon adventure built in Godot with a 4-person team, where the loot you collect grows increasingly personal toward a narrative twist.",
    tags: ["Game Development", "Hackathon", "Godot", "Team Project"],
    image: daring_dungoner,
    role: "Core Systems Programmer",
    duration: "Hackathon — 2 days",
    tech: ["Godot Engine", "GDScript"],
    liveUrl: "https://evee22.itch.io/daring-dungoneer",
    repoUrl: "https://github.com/longv1-code/chillennium-26",
    problem:
      "Built at Chillennium 2025 with three teammates. We wanted a short dungeon-crawler that used its mechanics to tell a story, not just decorate one — loot that means something by the end, not just stat sticks.",
    built: [
      {
        heading: "Core movement, UI, and lighting systems",
        body: "I owned the systems that everything else in the game sits on top of: player movement, where and how UI elements get placed and triggered, and the lighting that sets the dungeon's mood. One teammate built the level system and a sanity mechanic that reacts as the player progresses; two others handled all the pixel art and spritesheets. Splitting it this way meant I was effectively building the scaffolding the art and level design needed to land correctly.",
      },
    ],
    learned:
      "Working in Godot for the first time under a hard deadline meant a lot of learning GDScript's node and signal system on the fly. The bigger lesson was about division of labor in game dev specifically — systems, levels, and art are genuinely separable workstreams, but only if someone (in this case, partly me) keeps the interfaces between them simple enough that art and level changes don't constantly break the systems code.",
  },
];