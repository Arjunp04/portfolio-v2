import projectOne from "../assets/nutsiqMockup.png";
import projectTwo from "../assets/blogifyhub.png";
import projectThree from "../assets/fancyfinds.png";
import projectFour from "../assets/mockup.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPostman,
  SiTypescript,
  SiMongodb,
  SiAxios,
} from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { icon: "Calendar", value: "1+", label: "Year Experience" },
  { icon: "Layers", value: "8+", label: "Technologies" },
  { icon: "Briefcase", value: "2", label: "Professional Roles" },
];

export interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string; // Dynamic icon color strictly for light/dark blending
}

export interface TechCategory {
  id: string;
  category: string;
  techs: Tech[];
}

export const technologies: TechCategory[] = [
  {
    id: "01",
    category: "Core Web",
    techs: [
      { name: "HTML5", icon: FaHtml5, iconColor: "text-[#e34c26]" },
      { name: "CSS3", icon: FaCss3Alt, iconColor: "text-[#264de4]" },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        iconColor: "text-[#f7df1e]",
      },
    ],
  },
  {
    id: "02",
    category: "Frontend",
    techs: [
      { name: "React", icon: FaReact, iconColor: "text-[#61dafb]" },
      { name: "Next.js", icon: SiNextdotjs, iconColor: "text-foreground" }, // Inverted color for dark mode support
      { name: "TypeScript", icon: SiTypescript, iconColor: "text-[#3178c6]" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "text-[#0ea5e9]",
      },
      { name: "Redux", icon: SiRedux, iconColor: "text-[#764abc]" },
      { name: "Bootstrap", icon: FaBootstrap, iconColor: "text-[#764abc]" }, 
    ],
  },
  {
    id: "03",
    category: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs, iconColor: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, iconColor: "text-foreground" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#4db33d]" },

    ],
  },
  {
    id: "04",
    category: "Tools",
    techs: [
      { name: "Git", icon: FaGitAlt, iconColor: "text-[#f05032]" },
      { name: "GitHub", icon: FaGithub, iconColor: "text-foreground" },
      { name: "Postman", icon: SiPostman, iconColor: "text-[#ef5b25]" },
      { name: "Axios", icon: SiAxios, iconColor: "text-[#5a29e4]" },
    ],
  },
];

export const experience = [
  {
    period: "May 2025 - Feb 2026",
    role: "Frontend Developer",
    company: "Isource Technologies",
    location: "Dwarka, New Delhi, India",
    techStack: ["React.js", "Bootstrap", "Tailwind CSS", "Figma", "Axios"],
    highlights: [
      "Built the frontend for an <hl>in-house assessment platform</hl> — passcode login, timed tests, and an <hl>AI-integrated question module</hl> — replacing a paid tool.",
      "Developed an <hl>admin dashboard</hl> to generate score reports on demand, cutting assessment-tool costs for the company.",
      "Owned frontend for an <hl>HRMS Payroll module</hl>, handling salary setup and monthly generation linked to attendance approval.",
      "Built a <hl>Smart Mail Manager</hl> with an AI-assisted editor and scheduled toggles, automating 200+ emails monthly.",
      "Converted <hl>Figma designs</hl> into responsive interfaces for enterprise clients, using code-splitting and lazy loading for faster loads.",
      "Fixed UI bugs and built reusable React components across multiple internal enterprise modules, improving UI consistency and reducing development effort.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Purezza Technologies",
    location: "Ahmedabad, Gujarat, India",
    period: "Jan 2024 - July 2024",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Postman",
    ],
    highlights: [
      "Built <hl>Resume Portal & Photo Frame</hl> web apps with responsive UI, animations, and API-driven data flows.",
      "Developed <hl>Matrimony Site</hl> frontend featuring search, filter, and user-driven listings for <hl>100+ users</hl>.",
      "Created and integrated <hl>RESTful APIs</hl> and implemented <hl>PhonePe payment gateway</hl> for transactions.",
      "Led frontend work on <hl>Quote & Invoice Generator</hl> using Next.js, coordinating frontend-backend delivery.",
    ],
  },
];

export const projectsData = [
  {
    title: "FancyFinds4U",
    description:
      "Full-stack e-commerce platform with auth, product filtering, payments and admin panel.",
    image: projectFour,
    source: "https://github.com/Arjunp04/FancyFinds4U-Ecommerce-app",
    demoLink: "https://fancyfinds4u.vercel.app/",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js"],
  },
  {
    title: "BlogifyHub",
    description:
      "MERN blog app with rich text editor, auth, CRUD operations and dashboard.",
    image: projectTwo,
    source: "https://github.com/Arjunp04/BlogifyHub-MERN",
    demoLink: "https://blogifyhub.vercel.app/",
    tags: ["Next.js", "MongoDB", "Node.js", "TailwindCSS"],
  },
  {
    title: "Nuts IQ Store",
    description:
      "E-commerce platform with product management, cart, and secure checkout.",
    image: projectOne,
    source:
      "https://github.com/Arjunp04/E-commerce-NutsIQ-Store-using-Vite--React-----Firebase",
    demoLink: "https://nutsiqstore.vercel.app",
    tags: ["React", "Stripe", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce frontend",
    description:
      "Responsive e-commerce UI built with HTML, CSS & JS with dynamic interactions.",
    image: projectThree,
    source: "https://github.com/Arjunp04/E-commerce-frontend",
    demoLink: "https://fancyfinds-frontend.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
