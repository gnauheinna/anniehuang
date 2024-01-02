import {
  smartphone,
  binarycode,
  guitar,
  web,
  bungle,
  webAudit,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  clan,
  firebase,
  tensorflow,
  tailwind,
  nodejs,
  netcore,
  csharp,
  python,
  docker,
  meta,
  csrhett,
  buspark,
  uoc,
  connectplus,
  sportspal,
  websec,
  HandWritten,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "c",
    icon: clan,
  },
  {
    name: "python",
    icon: python,
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
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "netcore",
    icon: netcore,
  },

  {
    name: "tensorflow",
    icon: tensorflow,
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
    name: "Connect+",
    description:
      "React Native peer consultation platform for First-Generation college students to create commuity, share experiences and resources",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "end-to-end",
        color: "pink-text-gradient",
      },
      {
        name: "agile",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: connectplus,
    source_code_link: "https://github.com/gnauheinna/ConnectPlus",
  },
  {
    name: "SportPal",
    description:
      "C# ASP.Net core Sports social media WebApp for sports enthusiasts to initiate and join local sport events, manage schedules and payments, and engage in real-time chatting with other participants.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET CORE",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "GCP",
        color: "blue-text-gradient",
      },
    ],
    image: sportspal,
    source_code_link: "https://github.com/gnauheinna/SportPal",
  },
  {
    name: "Deep Learning Handwritten Digit Recognition Project",
    description:
      "Three feedforward neural network for handwritten digit recognition utilizing stochastic gradient descent, backpropagation, and cross-entropy cost function for improved performance.",
    tags: [
      {
        name: "neural network",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "Theano",
        color: "pink-text-gradient",
      },
      {
        name: "ReLu",
        color: "blue-text-gradient",
      },
    ],
    image: HandWritten,
    source_code_link:
      "https://github.com/gnauheinna/DeepLearning-HandwrittenDigitRecognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
