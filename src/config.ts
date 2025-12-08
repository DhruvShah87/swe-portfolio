export const siteConfig = {
  name: "Dhruv Shah",
  title: "Software Engineer",
  description: "Portfolio website of Dhruv Shah",
  accentColor: "#1d4ed8",
  social: {
    email: "shahdhruv20012004@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhruv-shah-52a985227/",
    twitter: "",
    github: "https://github.com/DhruvShah87",
  },
  aboutMe:
    "I am a Software Engineer with a strong interest in building reliable, scalable, and well-structured applications. Through my industry internship and my personal projects, I’ve gained hands-on experience designing systems, developing APIs, working with databases, and deploying applications using modern tools. I enjoy solving real-world problems through clean architecture and thoughtful engineering, and I’m actively seeking opportunities where I can contribute, learn, and grow as part of a collaborative software engineering team.",
  skills: ["TypeScript", "Node.js", "Express.js","React", "React Native",  "C++", "SQL", "AWS", "Langchain"],
  projects: [
    {
      name: "KitchenConnect",
      description:
        "KitchenConnect is a cross-platform application that connects tiffin providers with consumers, enabling subscription-based and single-order meal delivery.",
      link: "https://bit.ly/48LObXM",
      skills: ["React Native", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "Flight Booking System",
      description:
        "A scalable flight booking platform that manages flight data and ensures consistent, conflict-free seat reservations.",
      link: "https://github.com/DhruvShah87/airplane_booking",
      skills: ["Node.js", "Express.js", "SQL"],
    },
    {
      name: "YouTube Chatbot (RAG)",
      description:
        "A retrieval-augmented chatbot that enables users to query and explore YouTube video content through natural language.",
      link: "https://github.com/DhruvShah87/youtube-chatbot",
      skills: ["Python", "Langchain", "Gemini" ],
    },
    {
      name: "News Research Tool (RAG)",
      description:
        "A retrieval-augmented agent that helps users find answers from the content of news article URLs ",
      link: "https://news-research-tool-kklk.onrender.com",
      skills: ["Python", "Langchain", "Gemini" ],
    },
    {
      name: "Fashion Recommendation System",
      description:
        "An image-based recommendation system that suggests visually similar clothing items when a user uploads a garment photo",
      link: "https://github.com/DhruvShah87/fashion-recommendation-system",
      skills: ["Python", "Tensorflow" ],
    },
    {
      name: "TEEM",
      description:
        "TEEM is a web app designed to streamline collaboration between people from diverse backgrounds by allowing them to create workspaces, organize meetings, and manage tasks.",
      link: "https://github.com/KrishRupapara/Group-14_Proj-TEEM",
      skills: ["Node.js", "Express.js", "SQL" ],
    },
  ],
  experience: [
    {
      company: "Quicko Infosoft Pvt Ltd",
      title: "Full Stack Developer Intern",
      dateRange: "Jan 2025 - Mar 2025",
      bullets: [
        "Developed scalable APIs that integrate Gemini models to automate tax-document classification and extraction, speeding processing by 70%.",
        "Deployed serverless APIs with AWS Lambda and Jenkins CI/CD; provisioned multi-environment infrastructure with Terraform for consistent, scalable releases.",
        "Added multipart file uploads and PDF validation using PDFLib, cutting invalid submissions by 35%; applied Zod validation to improve output consistency by 75%.",
        
      ],
    },
    
  ],
  education: [
    {
      school: "Dhirubhai Ambani University (Formerly DA-IICT)",
      degree: "Bachelors of Technology in Information and Communication Technology",
      dateRange: "2021 - 2025",
      achievements: [
        "Graduated with 9.05 CPI",
        "Studied core software engineering subjects including Data Structures and Algorithms, OOPs, DBMS, Computer Networks, and Cloud Computing",
        "Chair of IEEE IAS DA-IICT Student Chapter",
      ],
    },
  ],
};
