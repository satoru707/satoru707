import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "TaskNest",
    period: "May 2025 – June 2025",
    description: [
      "Building a full-stack task management application using Node.js, Fastify, and React.",
      "Implementing secure authentication and authorization flows using Auth0.",
      "Designing efficient PostgreSQL schemas and optimizing queries for performance gains with prisma.",
      "Leading project architecture and mentoring a junior collaborator for faster delivery.",
    ],
  },
  // {
  //   id: 2,
  //   role: "Backend Developer",
  //   company: "CollabCode",
  //   period: "May 2025 – June 2025",
  //   description: [
  //     "Developing backend services for a real-time collaborative coding platform.",
  //     "Integrating operational transforms (OT) to enable conflict-free live code editing.",
  //     "Building WebSocket-based systems using Socket.IO for real-time event handling.",
  //     "Working closely with frontend engineers to ensure tight sync and smooth UX.",
  //   ],
  // },
  {
    id: 2,
    role: "Full Stack Developer (Personal Project)",
    company: "TimeForge",
    period: "April 2025 – May 2025",
    description: [
      "Built an AI-powered goal tracking and scheduling app using React, Node.js, and PostgreSQL.",
      "Integrated the Gemini API to deliver personalized suggestions based on user goals and patterns.",
      "Implemented a real-time deadline notification system using asynchronous job queues.",
      "Designed and executed the full system architecture, UI/UX, and API logic end-to-end.",
    ],
  },
];
