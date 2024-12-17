import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mysql,
  html,
  css,
  reactjs,
  tailwind,
  dj,
  next,
  git,
  figma,
  docker,
  webser,
  py,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Full stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: dj,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Applications",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#383E56",
    date: "",
    points: ["Tailored web apps built with the latest technologies."],
  },
  {
    title: "E-commerce Website",
    company_name: "Tesla",
    icon: webser,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["Secure online stores with user-frendly shopping and payments"],
  },
  {
    title: "API Integration",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#383E56",
    date: "",
    points: ["Seamless integration for smooth date sharing and functionality"],
  },
  {
    title: "User Interfaces",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Engaging, responsive front-end designs for better user experience",
    ],
  },
  {
    title: "Database Solutions",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#383E56",
    date: "",
    points: ["Efficient and scalable datebase management for your data needs"],
  },
  {
    title: "Real-Time Features",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#E6DEDD",
    date: "",
    points: ["Add live chat, notification and real-time data updates"],
  },
  {
    title: "Speed Optimization",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#383E56",
    date: "",
    points: ["Boost performance with faster load times and optimization"],
  },
  {
    title: "Website management",
    company_name: "DEVxNET",
    icon: webser,
    iconBg: "#E6DEDD",
    date: "",
    points: ["Easy content management systems with flexible controls"],
  },
];

const approach = [
  {
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. This phase includes defining site structure, navigation, and content requirements.",
  },
  {
    title: "Development & Progress Update",
    description:
      "Once the plan is finalized, I dive into coding with focus and creativity. From initial sketches to polished code, I keep you informed with regular progress updates at every stage.",
  },
  {
    title: "Development & Launch",
    description:
      "This is where the magic happens! Using the approved design as a blueprint, I transform ideas into functional code, delivering a fully developed website ready for launch.",
  },
];

const projects = [
  {
    name: "Nextjs Animated Portfolio",
    description:
      "A responsive portfolio website using Next.js and Tailwind CSS to showcase skills, projects, and experiences. It includes sections for projects, blogs, and a contact form, optimized for SEO and fast performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/",
  },
  {
    name: "DevXNet Application",
    description:
      "A robust application developed using Django as the backend to provide a platform for developers to collaborate, share knowledge, and manage projects. Features include user registration, project/task management.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant Website ",
    description:
      "A React-based restaurant website featuring an interactive menu, reservation system, customer reviews, and a contact page.It showcases the restaurant's ambiance through a visually appealing interface.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: p4,
    source_code_link: "https://github.com/",
  },
  {
    name: "Aluminium Pro",
    description:
      "A Django and MySQL-powered app for managing aluminum manufacturing and sales. Includes inventory tracking, order management, invoicing, and an analytics dashboard.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: p5,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tele Bot Tracker",
    description:
      "A Flask-based application integrated with MongoDB to manage and track Telegram bots' performance and usage. It provides insights into user interactions, command usage, and uptime.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: p6,
    source_code_link: "https://github.com/",
  },
  {
    name: "Echo Landing Page",
    description:
      "A sleek and minimalistic landing page built use to promote a product, service, or event. The design is fully responsive and optimized for fast loading. The page is designed to maximize conversions and user engagement.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: p7,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, approach, projects };
