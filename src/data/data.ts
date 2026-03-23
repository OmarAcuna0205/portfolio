import { assets } from "@/assets/assets";
import {
  GraduationCap,
  Briefcase,
  Code,
  Layout,
  Server,
  Database,
} from "lucide-react";

export const workData = [
  {
    title: "Portfolio",
    description: "Next.js · TypeScript · Tailwind · Framer Motion",
    bgImage: "/work-1.png",
  },
  {
    title: "Alejandro Prieto",
    description: "Next.js · TypeScript · Supabase · Prisma",
    bgImage: "/work-2.png",
  },
  {
    title: "Snap Back",
    description: "React · Node.js · Express · PostgreSQL",
    bgImage: "/work-3.png",
  },
  {
    title: "GPI",
    description: "React · Node.js · Express · PostgreSQL · WebSockets",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    Icon: Layout,
    title: "Frontend Development",
    description:
      "Responsive UIs with React and Next.js. Tailwind CSS and Framer Motion focused on clean UX/UI.",
    link: "",
  },
  {
    Icon: Server,
    title: "Backend Development",
    description:
      "REST APIs with Node.js and Express. Auth, middleware, and real production internship experience.",
    link: "",
  },
  {
    Icon: Database,
    title: "Database Design",
    description:
      "PostgreSQL and SQL Server with Prisma ORM. Backend-as-a-service experience using Supabase.",
    link: "",
  },
];

export const infoList = [
  {
    Icon: GraduationCap,
    title: "Education",
    items: ["B.S. Computer Systems"],
  },
  {
    Icon: Briefcase,
    title: "Experience",
    items: ["Intern at Visteon", "Intern at Ford"],
  },
  {
    Icon: Code,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
];

export const toolsData = [
  assets.nextjs,
  assets.supabase,
  assets.react,
  assets.nodejs,
  assets.expressjs,
  assets.postgresql,
];
