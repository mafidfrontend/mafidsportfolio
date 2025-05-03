import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  starbucks,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  }
];

const experiences: TExperience[] = [
  {
    title: "Intern support teacher",
    companyName: "Najot Ta'lim",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - April 2025",
    points: [
      "Developing and maintaining modern web applications using React.js, Next.js, and TypeScript as part of the Najot Ta'lim team.",
      "Collaborating with instructors, mentors, and other developers to build high-quality educational platforms and internal tools.",
      "Implementing responsive UI with Tailwind CSS and ensuring cross-browser and cross-device compatibility.",
      "Reviewing students' code, participating in code reviews, and providing mentorship and constructive feedback to junior developers.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Mafid Shop",
    description:
      "Mafid Shop is a web-based e-commerce platform that allows users to browse, purchase, and manage a wide range of digital and physical products. The platform offers a smooth and user-friendly shopping experience with secure payments, product filtering, and order tracking — making it a convenient and efficient solution for online shopping needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/mafidfrontend/mafidShop",
  },
  {
    name: "Olcha",
    description:
      "This project is a clone of the Olcha.uz e-commerce platform, built to replicate its core functionality and user experience. It allows users to browse products, add items to a cart, make purchases, and manage their orders. The platform features responsive design, product categorization, and a clean UI — providing a realistic example of a fully functional online shopping website. It was developed to deepen my understanding of building scalable e-commerce applications using modern frontend technologies.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/mafidfrontend/olcha.git",
  },
  {
    name: "Usefull",
    description:
      "Usefull Alpha is a minimalistic web application that curates and organizes a collection of useful tools, resources, and links for developers and learners. The platform is designed with a focus on simplicity, responsiveness, and accessibility — helping users quickly find and access helpful content in one place. Built using modern web technologies, it reflects my attention to user experience and efficient UI development.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/mafidfrontend/usefull",
  },
];

export { services, technologies, experiences, projects };
