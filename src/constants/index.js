import {
  smartphone,
  binarycode,
  guitar,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  csrhett,
  buspark,
  uoc,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Fullstack React Native Developer",
    icon: smartphone,
  },
  {
    title: "Whitehat Hacker",
    icon: binarycode,
  },
  {
    title: "Rock Band Lead Singer",
    icon: guitar,
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
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Course Assistant for CS237 Probability of Computing ",
    company_name: "Boston University Computer Science Department",
    icon: csrhett,
    iconBg: "#383E56",
    date: "Aug 2023 – Present",
    points: [
      "Collaborated with the course instructor to develop 25+ instructional materials, assignments, and assessments on complex topics including randomness in computing, probability theory, algorithmic efficiency, expectation and variance, discrete and continuous exponential distribution, Poisson distribution, Bloom filters, random walks, Markov and Chebyshev inequalities. ",
      "Conducted weekly office hours, providing one-on-one guidance to 200+ students, assisting with mathematical problem-solving and randomness in computing, improving student grades by 25%",
      "Led weekly discussions, teaching and engaging with 50+ students to solve complex mathematical and computing problems, increasing student engagement by 50%",
    ],
  },
  {
    title: "Technology Innovative Fellow",
    company_name: "Spark!@BU",
    icon: buspark,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Present",
    points: [
      "Led a team of 5 developers through the agile development process, orchestrating sprint planning, user research, user persona and problem statement creation, usability experiments, and backlog grooming, resulting in a highly intuitive UI/UX design. ",
      "Collaborated closely with a cross-functional team of product manager, marketers, and UI/UX designers, to transform real-life challenges into a software solution, leveraging full-stack engineering expertise to bring the team's ideas to life.",
      "Played a pivotal role in debugging and assisting team members in overcoming roadblocks, leading to a 200% increase in development efficiency.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Cambridge Cavendish Lab",
    icon: uoc,
    iconBg: "#383E56",
    date: "May 2022 – Aug 2022",
    points: [
      "Analyzed data from 10+ experiments utilizing advanced statistical methods, yielding meaningful insights and actionable recommendations.",
      "Synthesized complex data sets and performed statistical analysis to determine key insights, leading to increase in efficiency.",
      "Executed primary and secondary research for an extensive project that surveyed 100 participants over 3 months. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
