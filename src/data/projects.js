const formatItemNumber = (index) => String(index + 1).padStart(2, "0");

const withItemNumbers = (items) =>
  items.map((item, index) => ({
    ...item,
    number: formatItemNumber(index),
  }));

const projectItems = [
  {
    slug: "elyos-racing-team",
    title: "Elyos Racing Team",
    summary: "End-to-end web page for a telemetry system in a racing team.",
    description:
      "Platform concept focused on visualizing lap data, vehicle health, and race-day decisions through a clearer interface for engineers and drivers.",
    year: "2026",
    role: "Frontend + Product Thinking",
    duration: "8 weeks",
    stack: ["React", "Vite", "UI Systems"],
    highlights: [
      "Telemetry-first dashboard structure",
      "Fast access to race-critical information",
      "Interface built for clarity under pressure",
    ],
    outcome:
      "A project presentation flow that frames the product, the interface decisions, and the impact more clearly than a raw repository link.",
    github: "https://github.com/ZeusTucZ/Elyos-Telemetry",
  },
  {
    slug: "nutrition-app",
    title: "Nutrition App",
    summary: "Product-oriented app for healthier daily planning and tracking.",
    description:
      "A mobile-first concept for logging meals, monitoring habits, and turning nutrition data into simple actions that feel sustainable.",
    year: "2025",
    role: "UX + Frontend",
    duration: "6 weeks",
    stack: ["React", "Responsive Design", "Data Visualization"],
    highlights: [
      "Habit-friendly information hierarchy",
      "Readable progress snapshots",
      "Focus on practical day-to-day usage",
    ],
    outcome:
      "A polished case-study style overview that communicates product decisions, not just implementation.",
    github: "https://drive.google.com/drive/folders/1X9KR8HqeOSzYyoSSVEE-WcJcwMJdZ8af",
  },
  {
    slug: "smart-mirror",
    title: "Smart Mirror",
    summary: "Interactive display concept that blends utility, hardware, and ambient UI.",
    description:
      "A smart interface that surfaces daily essentials such as time, weather, reminders, and contextual widgets in a calm visual system.",
    year: "2025",
    role: "Interface Design + Integration",
    duration: "10 weeks",
    stack: ["React", "Embedded UI", "Dashboard Design"],
    highlights: [
      "Glanceable ambient interface",
      "Modules designed for mixed-use environments",
      "Strong visual balance between utility and aesthetics",
    ],
    outcome:
      "A more intentional showcase page that presents the concept, responsibilities, and user value in one place.",
    github: "https://github.com/danihdz11/Smart-Mirror",
  },
];

const certificateItems = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
    summary: "Cloud fundamentals credential focused on OCI services, architecture, and core platform concepts.",
    issuer: "Oracle",
    year: "2026",
    category: "Cloud",
    image: "/oci-foundations.jpg",
    link: "https://drive.google.com/file/d/108MJNYTEdnUXAzgJKHvCWzTOx-4BJ33V/view",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    summary: "AI foundations certification covering OCI AI services, machine learning concepts, and applied cloud use cases.",
    issuer: "Oracle",
    year: "2026",
    category: "AI",
    image: "/oci-ai-foundations.jpg",
    link: "https://drive.google.com/file/d/1NszRxV8fscqQDoagyQuRi-gxA6I3L1x_/view",
  },
  {
    title: "Smart Mirror (1st Place)",
    summary: "First-place recognition for a smart mirror project blending hardware, product thinking, and interface design.",
    issuer: "Project Award",
    year: "2025",
    category: "Award",
    image: "/expo-ingenierias.jpg",
    link: "https://drive.google.com/file/d/1Uo6PxW_tF16aJmc5TvvSlPt9WQb-I_m7/view",
  },
  {
    title: "Master the Coding Interview: Data Structures + Algorithms",
    summary: "Practical training in data structures, algorithms, and interview-style problem solving.",
    issuer: "Udemy",
    year: "2025",
    category: "Algorithms",
    image: "/master-coding-interview.jpg",
    link: "https://www.udemy.com/certificate/UC-e7d39414-74b3-46c6-b8b1-64b29e95e29d/",
  },
  {
    title: "Machine Learning with Python",
    summary: "Applied machine learning credential covering Python-based workflows, models, and evaluation fundamentals.",
    issuer: "Coursera",
    year: "2025",
    category: "Machine Learning",
    image: "/machine-learning-with-python.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/CTV61QX5EH4F",
  },
  {
    title: "Hack MTY Participation",
    summary: "Participation credential from Hack MTY, focused on fast product building and collaborative problem solving.",
    issuer: "Hack MTY",
    year: "2025",
    category: "Hackathon",
    image: "/hack-mty.jpeg",
    link: "https://drive.google.com/file/d/1PJHBKKhIYtdnj-e63w16tIANlgEoempt/view?usp=sharing"
  },
  {
    title: "Shell Eco Marathon 2026",
    summary: "Competition credential connected to efficient mobility, engineering execution, and team collaboration.",
    issuer: "Shell Eco Marathon",
    year: "2026",
    category: "Engineering",
    image: "/shell-eco-marathon.jpg",
    link: "https://drive.google.com/file/d/1KhPYm1C0T-40S-9WdeZvzZkT_pG76oo2/view?usp=sharing"
  }
];

export const projects = withItemNumbers(projectItems);

export const certificates = withItemNumbers(certificateItems);
