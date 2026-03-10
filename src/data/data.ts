import { assets } from '@/assets/assets';

export const workData = [
    {
        title: 'Portfolio',
        description: 'Next.js · TypeScript · Tailwind · Framer Motion',
        bgImage: '/work-1.png',
    },
    {
        title: 'Alejandro Prieto',
        description: 'Next.js · TypeScript · Supabase · Prisma',
        bgImage: '/work-2.png',
    },
    {
        title: 'Snap Back',
        description: 'React · Node.js · Express · PostgreSQL',
        bgImage: '/work-3.png',
    },
    {
        title: 'GPI',
        description: 'React · Node.js · Express · PostgreSQL · WebSockets',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Frontend Development',
        description: 'Full stack PERN applications with TypeScript, React, Node.js, Express and PostgreSQL. Modern web apps with Next.js and Tailwind CSS.',
        link: ''
    },
    {
        icon: assets.mobile_icon,
        title: 'Backend Development',
        description: 'REST APIs built with Node.js and Express.',
        link: ''
    },
    {
        icon: assets.code_icon,
        title: 'Database Design',
        description: 'Data modeling and queries with PostgreSQL and SQL Server. ORM experience with Prisma.',
        link: ''
    },
]

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description: 'TypeScript, JavaScript, C#, SQL'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'B.S. Computer Systems Engineering — Universidad La Salle Chihuahua'
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Experience',
        description: 'Software Intern at Visteon · Power Platform Intern at Ford'
    }
];

export const toolsData = [
    assets.vscode, assets.git, assets.figma
];