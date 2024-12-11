import { Project } from "@/routes/-components/repositories-section/RepositoriesSection";

export const projects: Project[] = [
  {
    repository: "vercel/next.js",
    description:
      "A React-based framework for server-side rendering and static site generation.",
    languages: ["JavaScript", "TypeScript"],
    link: "https://nextjs.org/",
  },
  {
    repository: "facebook/react",
    description:
      "A library for building user interfaces with a component-based approach.",
    languages: ["JavaScript", "Flow"],
    link: "https://reactjs.org/",
  },
  {
    repository: "nestjs/nest",
    description:
      "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
    languages: ["TypeScript", "JavaScript"],
    link: "https://nestjs.com/",
  },
  {
    repository: "microsoft/playwright",
    description: "End-to-end testing framework for web applications.",
    languages: ["JavaScript", "TypeScript"],
    link: "https://playwright.dev/",
  },

  {
    repository: "prisma/prisma",
    description: "A modern database toolkit for TypeScript and Node.js.",
    languages: ["TypeScript", "Rust"],
    link: "https://www.prisma.io/",
  },
  {
    repository: "remix-run/remix",
    description:
      "A full-stack web framework for building modern websites with React.",
    languages: ["JavaScript", "TypeScript"],
    link: "https://remix.run/",
  },
].map((p) => ({
  ...p,
  issuesCount: Math.floor(Math.random() * (40 - 10 + 1)) + 10, // Between 10 and 40
}));
