import { assets } from "@/assets/assets";
import { GraduationCap, Briefcase, Code } from "lucide-react";

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
    Icon: assets.web_icon,
    title: "Frontend Development",
    description:
      "Full stack PERN applications with TypeScript, React, Node.js, Express and PostgreSQL. Modern web apps with Next.js and Tailwind CSS.",
    link: "",
  },
  {
    Icon: assets.mobile_icon,
    title: "Backend Development",
    description: "REST APIs built with Node.js and Express.",
    link: "",
  },
  {
    Icon: assets.code_icon,
    title: "Database Design",
    description:
      "Data modeling and queries with PostgreSQL and SQL Server. ORM experience with Prisma.",
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
