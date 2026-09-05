import { Program } from "@/types/program";

export const programs: Program[] = [
  {
    slug: "robotics",
    title: "Robotics",
    tagline: "Build. Code. Innovate.",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview: "Hands-on robotics learning with real projects and outcomes.",
    benefits: [
      "Hands-on building with real robotics kits",
      "Improves logical and problem-solving skills",
      "Encourages teamwork through group projects",
      "Builds a strong foundation for future STEM careers",
    ],
    curriculum: [
      { title: "Intro to Robotics", description: "Basics of robots, parts and how they work." },
      { title: "Sensors & Actuators", description: "Understanding how robots sense and move." },
    ],
    outcomes: ["Problem solving", "Circuit design", "Teamwork"],
    projects: [
      { title: "Line Follower Robot", image: "/images/robotics1.jpg", description: "Build a robot that follows a path automatically." },
    ],
    ctaText: "Explore Robotics Program",
  },
  {
    slug: "stem",
    title: "STEM",
    tagline: "Science meets creativity",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview: "Covering Science, Technology, Engineering and Mathematics through hands-on activities.",
    benefits: [
      "Integrates 4 core subjects into fun activities",
      "Builds scientific temper and curiosity early",
      "Develops analytical and experimental thinking",
      "Prepares kids for engineering and research fields",
    ],
    curriculum: [
      { title: "Science Foundations", description: "Core scientific concepts through experiments." },
      { title: "Engineering Basics", description: "Design and build simple structures and machines." },
    ],
    outcomes: ["Critical thinking", "Experimentation", "Analytical skills"],
    projects: [
      { title: "Volcano Model", image: "/images/stem1.jpg", description: "A hands-on chemistry and engineering project." },
    ],
    ctaText: "Explore STEM Program",
  },
  {
    slug: "ai",
    title: "Artificial Intelligence",
    tagline: "Learn AI the fun way",
    ageGroups: ["10-13 yrs", "14-17 yrs"],
    overview: "AI basics, Generative AI and responsible AI use for young learners.",
    benefits: [
      "Understand how AI works in simple, practical terms",
      "Learn to use AI tools responsibly and ethically",
      "Builds future-ready digital literacy skills",
      "Hands-on projects using real AI concepts",
    ],
    curriculum: [
      { title: "AI Fundamentals", description: "What is AI and how it works, in simple terms." },
      { title: "Generative AI", description: "Introduction to how AI creates text, images and more." },
    ],
    outcomes: ["AI literacy", "Ethical thinking", "Creative problem solving"],
    projects: [
      { title: "Chatbot Builder", image: "/images/ai1.jpg", description: "Build a simple AI-powered chatbot." },
    ],
    ctaText: "Explore AI Program",
  },
  {
    slug: "ar-vr",
    title: "AR/VR",
    tagline: "Step into immersive learning",
    ageGroups: ["10-13 yrs", "14-17 yrs"],
    overview: "Immersive and 3D learning experiences using Augmented and Virtual Reality.",
    benefits: [
      "Learning through immersive, interactive experiences",
      "Improves spatial awareness and 3D visualization",
      "Makes abstract concepts easy to understand visually",
      "Introduces cutting-edge technology skills early",
    ],
    curriculum: [
      { title: "AR Basics", description: "Understanding Augmented Reality and its applications." },
      { title: "VR Design", description: "Creating simple virtual environments." },
    ],
    outcomes: ["Spatial thinking", "3D design skills", "Immersive storytelling"],
    projects: [
      { title: "AR Learning App", image: "/images/arvr1.jpg", description: "Build a basic AR experience using a mobile app." },
    ],
    ctaText: "Explore AR/VR Program",
  },
  {
    slug: "coding",
    title: "Coding",
    tagline: "From Scratch to real apps",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview: "Coding journey from Scratch to Python, Web and Game Development.",
    benefits: [
      "Step-by-step path from visual coding to real programming",
      "Builds logical thinking and computational skills",
      "Kids create their own games and apps",
      "Strong foundation for future software careers",
    ],
    curriculum: [
      { title: "Scratch Programming", description: "Visual, block-based coding for beginners." },
      { title: "Python & Web Dev", description: "Real-world coding using Python and web technologies." },
    ],
    outcomes: ["Logical thinking", "Programming fundamentals", "Project building"],
    projects: [
      { title: "Simple Game in Scratch", image: "/images/coding1.jpg", description: "Build and publish a small interactive game." },
    ],
    ctaText: "Explore Coding Program",
  },
];