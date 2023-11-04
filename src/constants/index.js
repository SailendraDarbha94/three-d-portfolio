import {
  mobile,
  backend,
  creator,
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
  elogo,
  zlogo,
  blogo,
  vue,
  svelte,
  nuxt,
  fend,
  pds,
  php,
  pm,
  rwd,
  uiux,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Interface Design",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Product Management",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Svelte & Kit",
    icon: svelte,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Vue JS",
    icon: vue,
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
    name: "nuxt",
    icon: nuxt,
  },
];

const experiences = [
  {
    title: "React.js Intern",
    company_name: "E3Next",
    icon: elogo,
    iconBg: "#383E56",
    date: "May 2021 - December 2021",
    points: [
      "Developing and maintaining web app features using React.js and other related technologies.",
      "Collaborating with remote clients.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code cleanup and improving upon feedback from other developers.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "BlinkIT",
    icon: blogo,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Oct 2022",
    points: [
      "Responsible for maintaining the store manager dashboard and managing feature requests.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing scalable design and ensuring low latency.",
      "Participating in code reviews and providing critical feedback to product managers.",
    ],
  },
  {
    title: "SDE 1",
    company_name: "Zomato",
    icon: zlogo,
    iconBg: "#383E56",
    date: "Oct 2022 - March 2023",
    points: [
      "Building consolidated views for Order Management in stores Pan India.",
      "Connecting with in-store managers and delivery partners to keep them in the feedback loop.",
      "Built new screens that drew attention to the wastage in stores thus reducing overall total wastage.",
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
    name: "Front End NanoDegree",
    description:
      "6 months Udacity course co-created by google and AT&T where I learned basics of HTML5, CSS3 and Javascript",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: fend,
    source_code_link: "https://github.com/",
  },
  {
    name: "Interface Design Specialization",
    description:
      "UI/UX specialization comprised of 5 individual courses taught by esteemed professors at University of Minnesota obtained via coursera",
    tags: [
      {
        name: "prototyping",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: uiux,
    source_code_link: "https://github.com/",
  },
  {
    name: "Product Management",
    description:
      "A course taught by Google at coursera that aims to teach people the fundamentals of Product management.",
    tags: [
      {
        name: "communication",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "goal-setting",
        color: "pink-text-gradient",
      },
    ],
    image: pm,
    source_code_link: "https://github.com/",
  },
  {
    name: "PHP Certification",
    description:
      "A course taught by Professor Chuck at the Michigan State University, that seeks to teach students how to develop scalable applications using PHP",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Server-Side",
        color: "green-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
    ],
    image: php,
    source_code_link: "https://github.com/",
  },
  {
    name: "Responsive Web Design",
    description:
      "Learnt the fundamentals of Responsive Web Design from the University of London through generous aid offering by Coursera.",
    tags: [
      {
        name: "Responsive Design",
        color: "blue-text-gradient",
      },
      {
        name: "Web Design",
        color: "green-text-gradient",
      },
      {
        name: "Meteor-JS",
        color: "pink-text-gradient",
      },
    ],
    image: rwd,
    source_code_link: "https://github.com/",
  },
  {
    name: "Python Data Structures",
    description:
      "In this course and the one preceding this one, I learnt the fundamentals of python programming language and it's data structures.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data-Structures",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: pds,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
