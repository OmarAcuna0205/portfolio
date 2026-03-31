import { assets } from "@/assets/assets";

import {
  GraduationCap,
  Briefcase,
  Code,
  Layout,
  Server,
  Database,
  Send,
} from "lucide-react";

export const workData = [
  {
    title: "Alejandro Prieto",
    description: "Next.js · Supabase",
    release: "Coming May 2026",
    bgImage: "/work-1.png",
    icon: Send,
  },
  {
    title: "skeeter",
    description: "PERN Stack",
    release: "Coming August 2026",
    bgImage: "/work-2.png",
    icon: Send,
  },
  {
    title: "o-CUU-po jale",
    description: "PERN Stack",
    release: "Coming November 2026",
    bgImage: "/work-3.png",
    icon: Send,
  },
];

export const serviceData = [
  {
    Icon: Layout,
    title: "Frontend Development",
    items: [
      "Responsive UI design with React.",
      "Animations with Framer Motion.",
    ],
    link: "",
  },
  {
    Icon: Server,
    title: "Backend Development",
    items: [
      "REST APIs with Node.js and Express.",
      "Real production experience.",
    ],
    link: "",
  },
  {
    Icon: Database,
    title: "Database Design.",
    items: ["PostgreSQL alone or via Supabase", "Modeled using Prisma ORM."],
    link: "",
  },
];

export const infoList = [
  {
    Icon: GraduationCap,
    title: "Education",
    items: ["8th semester B.S. Computer Science"],
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
