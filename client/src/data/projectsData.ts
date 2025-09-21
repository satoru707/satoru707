import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "TimeForge",
    description:
      "A powerful time management and personal productivity tool with ai insights.",
    stack: ["Node.js", "React", "PostgreSQL", "Express", "JWT", "Gemini API"],
    githubUrl: "https://github.com/satoru707/Persona",
    liveUrl: "https://timeforge-eight.vercel.app",
    image: "./timeforge.png",
  },
  {
    id: 2,
    title: "TaskNest",
    description:
      "A team task manager with intellignece to streamline workflow and boost productivity.",
    stack: ["Node.js", "TypeScript", "Fastify", "Auth0", "Prisma ORM"],
    githubUrl: "https://github.com/satoru707/TaskNest",
    liveUrl: "https://task-nest-gamma-eight.vercel.app",
    image: "./tasknest.png",
  },
  {
    id: 3,
    title: "MemoryLane",
    description:
      "Memory Lane is an AI-powered personal timeline app that helps you remember important moments and events from your life.",
    stack: ["Nextjs", "TypeScript", "Dexie", "Next-Auth", "Drizzle ORM"],
    githubUrl: "https://github.com/satoru707/MEMORY_LANE",
    liveUrl: "https://memory-lane-chi.vercel.app/",
    image: "./memory.png",
  },
  {
    id: 4,
    title: "OctoSustain",
    description:
      "A Real-Time Eco-Collaboration Platform to Track your eco-impact with OctoPods. Multitask like an octopus and save the planet!",
    stack: ["Nextjs", "TypeScript", "JWT", "Recharts", "Prisma ORM"],
    githubUrl: "https://github.com/satoru707/OctoSustain",
    liveUrl: "https://octo-sustain.vercel.app",
    image: "./octo.png",
  },
  {
    id: 5,
    title: "I-VOTEE",
    description:
      "A comprehensive, secure e-voting platform designed specifically for universities with cryptographic integrity verification, role-based access control, and mobile-first design.",
    stack: ["React", "Nodejs", "TypeScript", "JWT", "Crypto", "Prisma ORM"],
    githubUrl: "https://github.com/satoru707/voting_app",
    liveUrl: "https://voting-app-topaz.vercel.app/",
    image: "./vote.png",
  },
];
