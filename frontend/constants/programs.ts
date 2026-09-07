import { Program } from "@/types/program";

export const programs: Program[] = [
  {
    slug: "robotics",
    title: "Robotics",
    tagline: "Build. Code. Innovate.",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview:
      "Hands-on robotics learning where students build, program, and bring intelligent machines to life.",
    benefits: [
      "Hands-on building with real robotics kits",
      "Improves logical and problem-solving skills",
      "Encourages teamwork through group projects",
      "Builds a strong foundation for future STEM careers",
    ],
    curriculum: [
      {
        title: "Introduction to Robotics",
        description:
          "Understand robots, their components, and how intelligent machines work.",
      },
      {
        title: "Sensors & Actuators",
        description:
          "Learn how robots sense their environment and perform actions.",
      },
      {
        title: "Programming Robots",
        description:
          "Write programs that control robotic movement and decision making.",
      },
    ],
    outcomes: [
      "Problem solving",
      "Circuit design",
      "Programming basics",
      "Teamwork",
    ],
    projects: [
      {
        title: "Line Follower Robot",
        image: "/images/robotics1.jpg",
        description:
          "Build an autonomous robot capable of detecting and following a path.",
      },
    ],
    ctaText: "Explore Robotics Program",
  },

  {
    slug: "stem",
    title: "STEM",
    tagline: "Science Meets Creativity",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview:
      "Explore Science, Technology, Engineering, and Mathematics through exciting experiments and creative projects.",
    benefits: [
      "Integrates four core subjects through practical activities",
      "Builds scientific curiosity and experimentation skills",
      "Develops analytical and creative thinking",
      "Encourages students to solve real-world problems",
    ],
    curriculum: [
      {
        title: "Science Foundations",
        description:
          "Explore scientific concepts through interactive experiments.",
      },
      {
        title: "Engineering Basics",
        description:
          "Design and build structures, machines, and creative solutions.",
      },
      {
        title: "Mathematics in Action",
        description: "Apply mathematical concepts to real-world challenges.",
      },
    ],
    outcomes: [
      "Critical thinking",
      "Experimentation",
      "Analytical skills",
      "Scientific curiosity",
    ],
    projects: [
      {
        title: "Volcano Model",
        image: "/images/stem1.jpg",
        description:
          "Create a hands-on science project combining chemistry and engineering.",
      },
    ],
    ctaText: "Explore STEM Program",
  },

  {
    slug: "ai",
    title: "Artificial Intelligence",
    tagline: "Learn AI the Fun Way",
    ageGroups: ["10-13 yrs", "14-17 yrs"],
    overview:
      "Discover Artificial Intelligence, Machine Learning, Generative AI, and responsible technology use.",
    benefits: [
      "Understand AI through simple and practical examples",
      "Learn to use AI tools responsibly",
      "Build future-ready digital literacy skills",
      "Explore real-world AI applications",
    ],
    curriculum: [
      {
        title: "AI Fundamentals",
        description:
          "Understand what Artificial Intelligence is and how it works.",
      },
      {
        title: "Machine Learning",
        description: "Explore how machines learn patterns from data.",
      },
      {
        title: "Generative AI",
        description:
          "Discover how AI creates text, images, and other creative content.",
      },
    ],
    outcomes: [
      "AI literacy",
      "Ethical thinking",
      "Creative problem solving",
      "Digital skills",
    ],
    projects: [
      {
        title: "AI Chatbot Builder",
        image: "/images/ai1.jpg",
        description:
          "Create a simple AI-powered chatbot and understand conversational AI.",
      },
    ],
    ctaText: "Explore AI Program",
  },

  {
    slug: "ar-vr",
    title: "AR / VR",
    tagline: "Step Into Immersive Learning",
    ageGroups: ["10-13 yrs", "14-17 yrs"],
    overview:
      "Experience learning beyond screens through immersive Augmented Reality and Virtual Reality experiences.",
    benefits: [
      "Learn through immersive interactive experiences",
      "Improve spatial awareness and visualization",
      "Understand complex concepts in three dimensions",
      "Explore next-generation digital experiences",
    ],
    curriculum: [
      {
        title: "Introduction to AR",
        description:
          "Understand Augmented Reality and how digital content interacts with the real world.",
      },
      {
        title: "Virtual Reality",
        description: "Explore immersive virtual environments and experiences.",
      },
      {
        title: "3D Experience Design",
        description:
          "Learn the basics of designing interactive three-dimensional worlds.",
      },
    ],
    outcomes: [
      "Spatial thinking",
      "3D design awareness",
      "Creative storytelling",
      "Immersive technology knowledge",
    ],
    projects: [
      {
        title: "AR Learning Experience",
        image: "/images/arvr1.jpg",
        description:
          "Design an interactive Augmented Reality learning experience.",
      },
    ],
    ctaText: "Explore AR / VR Program",
  },

  {
    slug: "coding",
    title: "Coding",
    tagline: "From Scratch to Real Apps",
    ageGroups: ["6-9 yrs", "10-13 yrs", "14-17 yrs"],
    overview:
      "A structured coding journey that takes students from visual programming to real-world applications.",
    benefits: [
      "Step-by-step learning from beginner to advanced coding",
      "Develops logical and computational thinking",
      "Students build games, apps, and websites",
      "Creates a strong foundation for future technology careers",
    ],
    curriculum: [
      {
        title: "Scratch Programming",
        description:
          "Learn programming fundamentals through visual block-based coding.",
      },
      {
        title: "Python Programming",
        description: "Explore real programming concepts using Python.",
      },
      {
        title: "Web & Game Development",
        description: "Build interactive websites and creative digital games.",
      },
    ],
    outcomes: [
      "Logical thinking",
      "Programming fundamentals",
      "Creative development",
      "Project building",
    ],
    projects: [
      {
        title: "Interactive Game",
        image: "/images/coding1.jpg",
        description:
          "Design and build an interactive game using programming concepts.",
      },
    ],
    ctaText: "Explore Coding Program",
  },
];
