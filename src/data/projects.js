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
<<<<<<< HEAD
 *   featured    – show on homepage carousel when true
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
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
import gradprix from '../assets/images/gradprix.png'

export const PROJECTS = [
  {
    id: 1,
    title: "Horizon",
<<<<<<< HEAD
    featured: true,
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
    year: "2026",
    month: "March",
    summary:
      "A real banking dashboard that securely connects accounts and visualizes transactions, history, and card insights with a polished, data-driven UI.",
    tags: ["Full-Stack", "Next.js", "TypeScript", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85",
    role: "Solo Developer",
    duration: "Ongoing",
    tech: ["Next.js 14", "React", "TypeScript", "Appwrite", "Plaid API", "Dwolla API", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/longv1-code/banking-system",
    problem:
      "Engineering teams I talked to were juggling three separate tools — GitHub for issues, Notion for planning, and Slack threads for sprint updates. Context was always scattered. I wanted to build one workspace where code and planning lived together.",
    built: [
      {
        heading: "Real-time sync with WebSockets",
        body: "The core challenge was keeping multiple team members in sync without page refreshes. I built a WebSocket layer over Express that broadcasts board state diffs — only the changed card, not the full board — keeping payloads tiny even on large sprints.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      },
      {
        heading: "GitHub integration",
        body: "I used GitHub's webhook API to auto-create and update cards when issues are opened, closed, or labeled. The trickiest part was reconciling state conflicts when a card was moved manually on the board at the same time a webhook fired.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=900&q=80",
      },
    ],
    learned:
      "Distributed state is harder than it looks. I underestimated how often two users would act on the same card simultaneously — it forced me to implement optimistic UI updates with server reconciliation, a pattern I'd only read about before. I'd also scope the MVP tighter next time; the GitHub integration added 3 weeks I hadn't planned for.",
  },
  {
    id: 2,
    title: "GradPrix",
<<<<<<< HEAD
    featured: true,
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
    year: "2026",
    month: "January",
    summary:
      "Upload your transcript and GradPrix uses AI to turn it into a personalized, step-by-step degree plan that makes graduation requirements instantly clear.",
    tags: ["Full-Stack", "Hackathon", "TypeScript", "AI Integration", "Database"],
    image: gradprix,
    role: "Frontend Developer",
    duration: "24 hours",
    tech: ["Express.js", "Node.js", "PostgreSQL", "React", "TypeScript", "Vite", "Gemini API"],
    liveUrl: "https://gradprix.vercel.app/",
    repoUrl: "https://github.com/Prunuus/tamuhack26",
    problem:
      "I wanted to understand how games actually work under the hood — not through a game engine, but from scratch. The Canvas API seemed like the right level of abstraction: low enough to touch the pixels, high enough to stay in JavaScript.",
    built: [
      {
        heading: "Procedural dungeon generation",
        body: "I implemented BSP (Binary Space Partitioning) to recursively split the map into rooms, then connected them with corridors. Each run produces a different layout. The hardest part was ensuring every room was always reachable — I added a flood-fill validation pass after generation.",
        image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=900&q=80",
      },
      {
        heading: "Enemy AI with A* pathfinding",
        body: "Enemies needed to navigate around walls to chase the player. I implemented A* on a tile grid with a binary heap priority queue for performance. On larger maps with many enemies, naive A* was too slow — I added a shared navigation mesh so enemies could reuse cached paths.",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=900&q=80",
      },
    ],
    learned:
      "Game loops are deceptively complex. Managing a fixed timestep for physics while decoupling render rate took a full rewrite of my main loop. I also learned that player feel matters more than technical correctness — sometimes the 'wrong' number just feels better, and that's okay.",
  },
  {
    id: 3,
    title: "Daring Dungoner",
<<<<<<< HEAD
    featured: true,
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
    year: "2026",
    month: "Feburary",
    summary:
      "A 2D dungeon adventure where “loot” grows increasingly personal—ending in a narrative twist that recontextualizes the entire run.",
    tags: ["Game Development", "Hackathon", "Godot", "UI/UX"],
    image: daring_dungoner,
    role: "Lead Programmer",
    duration: "Ongoing",
    tech: ["Godot Engine", "GD Script"],
    liveUrl: "#",
    repoUrl: "https://github.com/longv1-code/chillennium-26",
    problem:
      "I play music and wanted to understand the math behind synthesis — filters, oscillators, envelopes. Building a DAW in the browser forced me to confront audio engineering concepts I'd only ever experienced as a listener.",
    built: [
      {
        heading: "Polyphonic synth engine",
        body: "I built a voice allocator that manages a pool of oscillator nodes. When a new note fires, it steals the oldest silent voice. Each voice runs through its own ADSR envelope, then a shared filter and effects bus. The Web Audio API's native scheduling meant near-zero latency.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      },
      {
        heading: "Step sequencer with visual feedback",
        body: "The sequencer uses a Web Worker for the timing loop to avoid jank from the main thread. Each step schedules notes ~100ms ahead using AudioContext.currentTime, while the UI updates on requestAnimationFrame. This decoupling kept the grid visually smooth even at fast BPMs.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
      },
    ],
    learned:
      "Audio timing in browsers is far more nuanced than I expected — setTimeout is not precise enough for music. The Web Worker + lookahead scheduling pattern was a revelation. I also learned that building tools for creative work requires a different kind of empathy than building productivity software.",
  },
  {
    id: 4,
    title: "Rate My Tutor",
<<<<<<< HEAD
    featured: false,
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
    year: "2024",
    month: "September",
    summary:
      "A full-stack platform where students can discover and review tutors/TAs—highlighting teaching style so they can choose the right academic support.",
    tags: ["Full-Stack", "MERN", "REST API", "Database", "Authentication"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85",
    role: "Open Source Maintainer",
    duration: "4 months",
    tech: ["React", "MongoDB", "Express.js", "Node.js", "REST API"],
    liveUrl: "#",
    repoUrl: "https://github.com/aggie-coding-club/Rate-My-Tutor",
    problem:
      "Every side project I started needed the same set of components — buttons, modals, form inputs — and I kept rebuilding them. I decided to build one library I'd actually want to use: fully typed, accessible by default, and easy to theme without fighting CSS specificity.",
    built: [
      {
        heading: "Theming via CSS custom properties",
        body: "Instead of a JS theme object, I used CSS custom properties scoped to a data attribute. This means themes work without a Provider, can be swapped at runtime with zero JS, and even work in plain HTML. I wrote a token validator that checks contrast ratios at build time.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&q=80",
      },
      {
        heading: "Accessibility first",
        body: "Every interactive component follows WCAG 2.1 AA. I used Radix UI primitives for the complex patterns (dialogs, tooltips, dropdowns) and wrote my own for simpler ones. The test suite runs axe-core on every component in CI — a11y regressions fail the build.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&q=80",
      },
    ],
    learned:
      "Maintaining open source is a product role, not just an engineering one. Half the work is writing docs, handling issues diplomatically, and deciding what not to build. The 2,000 downloads came mostly from one Reddit post — distribution matters as much as the code.",
  },
  {
    id: 5,
    title: "FL.AI.SH",
<<<<<<< HEAD
    featured: false,
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
    year: "2024",
    month: "August",
    summary:
      "Enter any topic and this AI-Powered web app will instantly generate clean, study-ready flashcards in a fast, minimal interface.",
    tags: ["AI-Powered Study Tool", "Full-Stack", "LLM Integration"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85",
    role: "Open Source Maintainer",
    duration: "1 week",
    tech: ["React", "Tailwind CSS", "Next.js", "TypeScript", "OpenAI API", "Vercel", "Node.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/longv1-code/kevs_flashcard",
    problem:
      "Every side project I started needed the same set of components — buttons, modals, form inputs — and I kept rebuilding them. I decided to build one library I'd actually want to use: fully typed, accessible by default, and easy to theme without fighting CSS specificity.",
    built: [
      {
        heading: "Theming via CSS custom properties",
        body: "Instead of a JS theme object, I used CSS custom properties scoped to a data attribute. This means themes work without a Provider, can be swapped at runtime with zero JS, and even work in plain HTML. I wrote a token validator that checks contrast ratios at build time.",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&q=80",
      },
      {
        heading: "Accessibility first",
        body: "Every interactive component follows WCAG 2.1 AA. I used Radix UI primitives for the complex patterns (dialogs, tooltips, dropdowns) and wrote my own for simpler ones. The test suite runs axe-core on every component in CI — a11y regressions fail the build.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&q=80",
      },
    ],
    learned:
      "Maintaining open source is a product role, not just an engineering one. Half the work is writing docs, handling issues diplomatically, and deciding what not to build. The 2,000 downloads came mostly from one Reddit post — distribution matters as much as the code.",
  },
];
