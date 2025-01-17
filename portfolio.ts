import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hussam AbdAllah",
  title: "Hi all, I'm Hussam",
  description:
    "I'm a passionate Full Stack mobile and web developer with experience developing Android and IOS apps using Flutter and Dart I'm also Full Stack web applications with Php, Node.js, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "7samasm",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "hussamasm92@gmail.com",
  linkedin: "https://www.linkedin.com/in/hussam-abdallah-76ab9a229/",
  github: "https://github.com/7samasm",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Android and IOS apps using Flutter and Dart"),
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in Vue.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node & Express REST Framework"),
        emoji("⚡ Testing javaScript frameworks using Jest for unit testing and cypress for e2e test"),
        emoji("⚡ Dockrizing applications for easy deployment using docker and kubernetes"),
        emoji("⚡ Automating deployment using Github Actions"),
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        // {
        //   skillName: "Dart",
        //   iconifyTag: "logos:dart",
        // },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "NodeJs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "mongoDB",
          iconifyTag: "logos:mongodb",
        },

        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Vuejs",
          iconifyTag: "logos:vue",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "Jest",
          iconifyTag: "logos:jest",
        },
        {
          skillName: "cypress",
          iconifyTag: "logos:cypress",
        },

        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "SudaFire",
    desc: "a Flutter Ecommerce app powered by firebase",
    github: "https://github.com/7samasm/suda-fire",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "SudaShop_Next",
    desc: "an Ecommerce website built by nextJs",
    github: "https://github.com/7samasm/SudaShop_Next",
    link: "https://suda-shop-next.vercel.app/",
  },
  {
    name: "SudaShop_nuxt",
    desc: "an Ecommerce website built by vue & nuxtJs",
    github: "https://github.com/7samasm/SudaShop_Next",
    link: "https://fashionable-germain-suda-shop-c0f705da.koyeb.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hussam AbdAllah Portfolio",
  description: greetings.description,
  author: "Hussam AbdAllah",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hussam",
    "Hussam AbdAllah",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hussam Portfolio ",
    "Hussam AbdAllah Portfolio",
  ],
};
