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
  // {
  //   id: 2,
  //   title: "CollabCode",
  //   description:
  //     "Developer collaboration platform with real-time code sharing and review capabilities.",
  //   stack: ["Node.js", "Socket.io", "Express", "MongoDB", "React"],
  //   liveUrl: "https://collab-code-mauve.vercel.app",
  //   githubUrl: "https://github.com/satoru707/CollabCode",
  //   image: "./collabcode.png",
  // },
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
];
