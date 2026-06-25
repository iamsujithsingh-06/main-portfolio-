// Sujith's Portfolio Data
import sujithProfileImage from '../assets/sujith_singh_.png';

export const personalInfo = {
  name: "Sujith",
  title: "AI & Data Science Student",
  roles: ["Full Stack Developer", "AI Enthusiast", "Game Developer", "Machine Learning Learner"],
  intro: "Building intelligent applications, modern web experiences, and solving real-world problems using AI and software engineering.",
  aboutDescription: "I am Sujith, a passionate AI & Data Science student interested in Artificial Intelligence, Full Stack Development, Machine Learning, and Game Development. I enjoy building real-world solutions that solve practical problems.",
  profileImage: sujithProfileImage,
  resumePdf: "/resume.pdf",
  details: {
    name: "Sujith Singh S M",
    degree: "B.Tech Artificial Intelligence & Data Science",
    location: "Cheyyar, Tamil Nadu, India",
    availability: "Open to Opportunities",
    role: "AI & Full Stack Developer"
  },
  socials: {
    github: "https://github.com/sujith-github",
    linkedin: "https://linkedin.com/in/sujith-linkedin",
    instagram: "https://instagram.com/sujith-instagram",
    email: "sujithsinghsm@gmail.com"
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "SiPython", color: "text-[#3776AB]" },
      { name: "Java", icon: "FaJava", color: "text-[#007396]" },
      { name: "C", icon: "SiC", color: "text-[#A8B9CC]" },
      { name: "C++", icon: "SiCplusplus", color: "text-[#00599C]" },
      { name: "JavaScript", icon: "SiJavascript", color: "text-[#F7DF1E]" },
      { name: "C#", icon: "SiCsharp", color: "text-[#239120]" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "SiHtml5", color: "text-[#E34F26]" },
      { name: "CSS3", icon: "SiCss3", color: "text-[#1572B6]" },
      { name: "React", icon: "SiReact", color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-[#06B6D4]" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "text-[#339933]" },
      { name: "Express.js", icon: "SiExpress", color: "text-[#f3f4f6]" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: "SiMysql", color: "text-[#4479A1]" },
      { name: "MongoDB", icon: "SiMongodb", color: "text-[#47A248]" }
    ]
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Machine Learning", icon: "GiBrain", color: "text-[#FF6F61]" },
      { name: "Pandas", icon: "SiPandas", color: "text-[#150458]" },
      { name: "NumPy", icon: "SiNumpy", color: "text-[#013243]" },
      { name: "Matplotlib", icon: "SiPlotly", color: "text-[#1F77B4]" },
      { name: "Scikit-Learn", icon: "SiScikitlearn", color: "text-[#F7931E]" }
    ]
  },
  {
    category: "Game Development",
    skills: [
      { name: "Unity Engine", icon: "SiUnity", color: "text-[#f3f4f6]" },
      { name: "Unreal Engine", icon: "SiUnrealengine", color: "text-[#000000] dark:text-[#ffffff]" }
    ]
  }
];

// Project assets live in /public/projects/{image}.jpg
// `github` and `demo` are intentionally left as empty strings for any project
// that doesn't yet have a real link. The UI will detect this and gracefully
// fall back to a disabled "Coming Soon" button.
export const projectsData = [
  {
    id: 1,
    name: "College Chatbot",
    description: "An AI-powered chatbot designed to handle college and student queries efficiently, providing instant responses on curriculum, admissions, and schedules.",
    tags: ["Python", "HTML", "CSS", "JavaScript", "Machine Learning"],
    github: "",
    demo: "",
    image: "chatbot"
  },
  {
    id: 2,
    name: "Forward Stroke",
    description: "Forward Stroke is a modern full-stack cricket merchandise e-commerce platform built with the MERN stack. It includes secure authentication, product browsing, shopping cart, payment integration, responsive UI, and an admin dashboard, providing a complete online shopping experience for cricket fans.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Context API"],
    github: "https://github.com/iamsujithsingh-06/forward-stroke",
    demo: "https://forwardstroke.vercel.app/",
    image: "ecommerce"
  },
  {
    id: 3,
    name: "Customer Churn Prediction",
    description: "A machine learning pipeline that analyzes customer behavior patterns to predict retention risks and help businesses optimize customer lifetime value.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    github: "",
    demo: "",
    image: "churn"
  },
  {
    id: 4,
    name: "Unity Game",
    description: "An interactive, action-packed 2D/3D platformer game featuring physics-based challenges, custom particle systems, and audio tracks.",
    tags: ["Unity", "C#"],
    github: "",
    demo: "",
    image: "unity"
  },
  {
    id: 5,
    name: "Unreal Engine Game",
    description: "A visually stunning 3D action game utilizing Unreal Engine's nanite, lumen lighting system, custom animations, and C++ gameplay logic.",
    tags: ["Unreal Engine", "C++"],
    github: "",
    demo: "",
    image: "unreal"
  },
  {
    id: 6,
    name: "AI-Based Traffic Control System",
    description: "A dynamic smart traffic signal system that uses computer vision to detect vehicle density and optimize traffic flow timings in real time.",
    tags: ["Python", "OpenCV", "Machine Learning"],
    github: "",
    demo: "",
    image: "traffic"
  },
  {
    id: 7,
    name: "Smart Hospital Management System",
    description: "A comprehensive administration platform that manages patient records, doctor schedules, appointments, billing, and pharmacy inventories.",
    tags: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    image: "hospital"
  }
];

// Certificate images live in /public/certificates/{id}.jpg
// `link` is intentionally left as an empty string when no real certificate
// URL is available. The UI will show a disabled "Certificate Coming Soon"
// state instead of navigating to a broken page.
export const certificationsData = [
  {
    id: 1,
    name: "Python Certification",
    organization: "Python Institute / Coursera",
    date: "July 2025",
    link: ""
  },
  {
    id: 2,
    name: "Java Certification",
    organization: "Oracle / Udemy",
    date: "September 2025",
    link: ""
  },
  {
    id: 3,
    name: "C Certification",
    organization: "Great Learning / Hackerrank",
    date: "November 2025",
    link: ""
  },
  {
    id: 4,
    name: "C++ Certification",
    organization: "Coding Ninjas / Sololearn",
    date: "February 2026",
    link: ""
  }
];
