import P1_01 from "../assets/projects/projectOne/pc/P1_01.png";
import P1_02 from "../assets/projects/projectOne/pc/P1_02.png";
import A1_01 from "../assets/projects/projectOne/android/A1_01.png";
import A1_02 from "../assets/projects/projectOne/android/A1_02.png";
import P4_01 from "../assets/projects/projectFour/pc/P4_01.png";
import P4_02 from "../assets/projects/projectFour/pc/P4_02.png";
import A4_01 from "../assets/projects/projectFour/android/A4_01.png";
import A4_02 from "../assets/projects/projectFour/android/A4_02.png";
import A4_03 from "../assets/projects/projectFour/android/A4_03.png";
import P3_01 from "../assets/projects/projectThree/pc/P3_01.png";
import P2_01 from "../assets/projects/projectTwo/pc/P2_01.png";
import P2_02 from "../assets/projects/projectTwo/pc/P2_02.png";
import P2_03 from "../assets/projects/projectTwo/pc/P2_03.png";
import P2_04 from "../assets/projects/projectTwo/pc/P2_04.png";
import P2_05 from "../assets/projects/projectTwo/pc/P2_05.png";
import P2_06 from "../assets/projects/projectTwo/pc/P2_06.png";
import P2_07 from "../assets/projects/projectTwo/pc/P2_07.png";

export const HERO_CONTENT = `Hi, I'm Pawan Kumar Verma, a passionate Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js). I craft modern, scalable, and performance-driven web solutions tailored to your business needs.
I don’t just build websites — I build digital experiences that help brands grow, scale, and thrive in the online world.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack web developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), with a strong focus on building scalable, high-performance, and visually impressive web applications.

My journey began with curiosity and has now transformed into a mission:
To build my own web development business that helps clients scale with high-quality, tailor-made website solutions.
I aim to collaborate with businesses who seek a technology partner focused on growth, quality, and reliability.
Let’s turn your ideas into impactful digital solutions.`;



export const PROJECTS = [
  {
    title: " Weather App",
    webImages: [P1_01,P1_02],
    androidImages: [A1_01,A1_02],
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "E-Commerce Admin Dashboard ",
     webImages: [P2_01,P2_02,P2_03,P2_04,P2_05,P2_06,P2_07],
    androidImages:[],
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS","React","Vite"],
  },
  {
    title: "College Student Website",
     webImages: [P3_01],
     androidImages:[],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Trade Fly Hub-Gaming Platform",
     webImages: [P4_02,P4_01],
    androidImages:[A4_01,A4_02,A4_03],
    description:
      "TradeFlyHub features include real-time portfolio tracking, secure crypto wallet integration, user dashboards, smart analytics, and seamless withdrawals — built using the modern MERN stack with responsive design.",
    technologies: ["HTML","CSS","Vite", "React", "Node.js", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  
  phoneNo: "+919693802479 ",
  email: "pawanroy2004@gmail.com",
};
